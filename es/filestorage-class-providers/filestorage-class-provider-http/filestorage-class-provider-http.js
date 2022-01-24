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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageClassProviderHTTP = void 0;
const files_utils_1 = require("@pashoo2/files-utils");
const http_request_1 = require("@pashoo2/http-request");
const filestorage_class_const_1 = require("../../filestorage-class.const");
const filestorage_class_provider_http_const_1 = require("./filestorage-class-provider-http.const");
class FileStorageClassProviderHTTP {
    constructor() {
        this.type = filestorage_class_provider_http_const_1.FILE_STORAGE_PROVIDER_HTTP_TYPE;
        this.isSingleton = true;
        this.identifier = filestorage_class_provider_http_const_1.FILE_STORAGE_PROVIDER_HTTP_IDENTIFIER;
        this.add = (filename, file, options) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('The HTTP provider does not supports files uploading');
        });
        this.get = (addr, options) => __awaiter(this, void 0, void 0, function* () {
            const urlNormalized = this.getFileURL(addr);
            const req = new http_request_1.HttpRequest(Object.assign(Object.assign({ credentials: 'include', mode: http_request_1.HTTP_REQUEST_MODE.CORS }, options), { url: urlNormalized }));
            const result = yield req.send();
            if (!(result instanceof File)) {
                throw new Error('Failed to get the file from the network');
            }
            return result;
        });
        this.download = (addr, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _options) => __awaiter(this, void 0, void 0, function* () {
            const urlNormalized = this.getFileURL(addr);
            (0, files_utils_1.downloadFileByUrl)(urlNormalized);
        });
    }
    get status() {
        return filestorage_class_const_1.FILE_STORAGE_SERVICE_STATUS.READY;
    }
    isFileServed(addr) {
        return addr.startsWith('/http') || this.isBlobAddr(addr);
    }
    connect(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return filestorage_class_provider_http_const_1.FILE_STORAGE_PROVIDER_HTTP_IDENTIFIER;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    isBlobAddr(addr) {
        return addr.startsWith('/data:');
    }
    getFileURL(addr) {
        if (this.isBlobAddr(addr)) {
            return addr.slice(1);
        }
        const isHttps = addr.startsWith('/https');
        const protocol = isHttps ? 'https://' : 'http://';
        const addrWithoutPrefix = (isHttps ? addr.slice(6) : addr.slice(5)).replace(/^\W+/, '');
        const resultedUrl = `${protocol}${addrWithoutPrefix}`;
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        return String(new URL(resultedUrl));
    }
}
exports.FileStorageClassProviderHTTP = FileStorageClassProviderHTTP;
//# sourceMappingURL=filestorage-class-provider-http.js.map