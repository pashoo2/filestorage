"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageClassProviderIPFS = void 0;
const utils_1 = require("@pashoo2/utils");
const files_utils_1 = require("@pashoo2/files-utils");
const assert_1 = __importDefault(require("assert"));
const path_1 = __importDefault(require("path"));
const bl_1 = __importDefault(require("bl"));
const filestorage_class_provider_ipfs_const_1 = require("./filestorage-class-provider-ipfs.const");
const filestorage_class_const_1 = require("../../filestorage-class.const");
const filestorage_class_provider_ipfs_const_2 = require("./filestorage-class-provider-ipfs.const");
const filestorage_class_provider_ipfs_const_3 = require("./filestorage-class-provider-ipfs.const");
class FileStorageClassProviderIPFS {
    constructor() {
        this.type = filestorage_class_provider_ipfs_const_1.FILE_STORAGE_PROVIDER_IPFS_TYPE;
        this.isSingleton = true;
        this.identifier = filestorage_class_provider_ipfs_const_1.FILE_STORAGE_PROVIDER_IPFS_IDENTIFIER;
        /**
         * this is the prefix for path
         * of each file uploaded
         *
         * @protected
         * @type {string}
         * @memberof FileStorageClassProviderIPFS
         */
        this._rootPath = filestorage_class_provider_ipfs_const_3.FILE_STORAGE_PROVIDER_ROOT_PATH_DEFAULT;
        this.add = (filename, file, options) => __awaiter(this, void 0, void 0, function* () {
            const ipfs = this._ipfs;
            const fileSize = (0, files_utils_1.getFileSize)(file);
            (0, assert_1.default)(this.status === filestorage_class_const_1.FILE_STORAGE_SERVICE_STATUS.READY, 'Service is not ready to use');
            (0, assert_1.default)(fileSize, 'Failed to get a size of the file');
            let files;
            const progressCallback = options === null || options === void 0 ? void 0 : options.progress;
            let resolve;
            const pending = new Promise(res => {
                resolve = res;
            });
            const opts = (0, utils_1.extend)(options || {}, {
                pin: false,
                cidVersion: 1,
                progress: (bytes) => {
                    const percent = (bytes / fileSize) * 100;
                    if (progressCallback) {
                        progressCallback(percent);
                    }
                    if (resolve && percent >= 100) {
                        resolve();
                    }
                },
            }, true);
            try {
                files = yield Promise.race([
                    ipfs === null || ipfs === void 0 ? void 0 : ipfs.add(this.getFileObject(filename, file), opts),
                    (0, utils_1.timeout)(filestorage_class_provider_ipfs_const_2.FILE_STORAGE_PROVIDER_IPFS_FILE_UPLOAD_TIMEOUT_MS),
                ]);
                yield pending;
            }
            catch (err) {
                console.error(err);
                throw err;
            }
            if (!files) {
                throw new Error('Failed to upload for an unknown reason');
            }
            if (files instanceof Error) {
                throw files;
            }
            return this.getMultiaddr(files[0]);
        });
        this.get = (addr, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _options) => __awaiter(this, void 0, void 0, function* () {
            (0, assert_1.default)(this.status === filestorage_class_const_1.FILE_STORAGE_SERVICE_STATUS.READY, 'Service is not ready to use');
            (0, assert_1.default)(this.isFileServed(addr), 'The file is not supported by the service');
            const ipfs = this._ipfs;
            if (!ipfs) {
                throw new Error('IPFS instance is not defined');
            }
            const fileDesc = this.getFileDescription(addr);
            const filesOrChunks = yield ipfs.get(fileDesc.cid);
            const content = new bl_1.default();
            let lastModified = 0;
            let fileBlob;
            if (!filesOrChunks) {
                throw new Error('Failed to read the file');
            }
            if (filesOrChunks instanceof Array) {
                const chunksLen = filesOrChunks.length;
                let idx = 0;
                while (idx < chunksLen) {
                    const chunk = filesOrChunks[idx++];
                    content.append(chunk.content);
                    lastModified = this.getMSByUnix(chunk.mtime);
                }
                const buff = content.slice();
                fileBlob = buff.buffer.slice(buff.byteOffset, buff.byteOffset + buff.byteLength);
            }
            else {
                if (!filesOrChunks.content) {
                    throw new Error("Failed to read the file's content");
                }
                if (filesOrChunks.content instanceof Blob) {
                    fileBlob = [filesOrChunks.content];
                    if (filesOrChunks.mtime) {
                        lastModified = this.getMSByUnix(filesOrChunks.mtime);
                    }
                }
                else if (typeof filesOrChunks.content === 'string') {
                    content.append(filesOrChunks.content);
                }
                throw new Error('Unknown content type');
            }
            return new File([fileBlob], fileDesc.path, {
                lastModified: lastModified ? lastModified : undefined,
            });
        });
        this.download = (addr, options) => __awaiter(this, void 0, void 0, function* () {
            const file = yield this.get(addr, options);
            (0, files_utils_1.downloadFile)(file);
        });
    }
    get status() {
        const { _ipfs: ipfs } = this;
        if (!ipfs || !ipfs.isOnline()) {
            return filestorage_class_const_1.FILE_STORAGE_SERVICE_STATUS.NOT_READY;
        }
        if (!ipfs.files || this._error) {
            return filestorage_class_const_1.FILE_STORAGE_SERVICE_STATUS.ERROR;
        }
        return filestorage_class_const_1.FILE_STORAGE_SERVICE_STATUS.READY;
    }
    isFileServed(addr) {
        return addr.startsWith('/ipfs');
    }
    connect(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.setOptions(options);
                yield ((_a = this._ipfs) === null || _a === void 0 ? void 0 : _a.ready);
            }
            catch (err) {
                console.log(err);
                throw err;
            }
            return filestorage_class_provider_ipfs_const_1.FILE_STORAGE_PROVIDER_IPFS_IDENTIFIER;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this._ipfs = undefined;
        });
    }
    setOptions(options) {
        (0, assert_1.default)(options.ipfs, 'An instance of IPFS must be provided in the options');
        this._ipfs = options.ipfs;
        this._rootPath =
            options.rootPath || filestorage_class_provider_ipfs_const_3.FILE_STORAGE_PROVIDER_ROOT_PATH_DEFAULT;
    }
    getFileObject(filename, file) {
        const filePath = path_1.default.join('/', this._rootPath, filename);
        return {
            path: filePath,
            content: file,
            mtime: file instanceof File ? new Date(file.lastModified) : undefined,
        };
    }
    getMultiaddr(file) {
        return path_1.default.join('/ipfs/', file.hash, file.path);
    }
    getFileDescription(addr) {
        const [nothing, prefix, cid, path] = addr.split('/');
        (0, assert_1.default)(cid, 'Failed to get CID by the address');
        (0, assert_1.default)(path, 'Failed to get file path by the address');
        return {
            cid,
            path,
        };
    }
    getMSByUnix(unix) {
        return unix && unix.secs ? unix.secs : Date.now();
    }
}
exports.FileStorageClassProviderIPFS = FileStorageClassProviderIPFS;
//# sourceMappingURL=filestorage-class-provider-ipfs.js.map