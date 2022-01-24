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
exports.FileStorage = void 0;
const filestorage_class_const_1 = require("./filestorage-class.const");
const assert_1 = __importDefault(require("assert"));
const path_1 = __importDefault(require("path"));
const filestorage_class_const_2 = require("./filestorage-class.const");
class FileStorage {
    constructor() {
        this.services = new Map();
        this.servicesByTypes = new Map();
        this.connect = (configurations) => __awaiter(this, void 0, void 0, function* () {
            return Promise.all(configurations.map(this.connectToService));
        });
        this.close = (s) => __awaiter(this, void 0, void 0, function* () {
            const service = this.getServiceByTypeOrId(s);
            if (!service) {
                throw new Error(`Service with the given identifier = "${s}" was not found`);
            }
            return this.removeService(service);
        });
        this.add = (s, filename, file, options) => __awaiter(this, void 0, void 0, function* () {
            const service = this.getServiceByTypeOrId(s);
            if (!service) {
                throw new Error(`Service with the given identifier or type = "${s}" was not found`);
            }
            return this.addPrefixToFileAddress(yield service.add(filename, file, options));
        });
        this.get = (addr, options) => __awaiter(this, void 0, void 0, function* () {
            const addrWOPrefix = this.getAddrWOPrefix(addr);
            const service = this.getServiceByFileAddr(addrWOPrefix);
            if (!service) {
                throw new Error(`A file with the address "${addr}" is not supported`);
            }
            return service.get(addrWOPrefix, options);
        });
        this.connectToService = (configuration) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            (0, assert_1.default)(configuration, 'Service configuration was not provided');
            const { type, options } = configuration;
            (0, assert_1.default)(type, 'Service type must be defined');
            (0, assert_1.default)(options, `Options for the service "${type}" must be defined`);
            const ServiceConstructor = yield this.getServiceConstructorByType(configuration.type);
            const service = new ((_a = ServiceConstructor.default) !== null && _a !== void 0 ? _a : ServiceConstructor)();
            yield service.connect(options);
            this.addService(type, service);
            return service.identifier;
        });
    }
    download(addr, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const addrWOPrefix = this.getAddrWOPrefix(addr);
            const service = this.getServiceByFileAddr(addrWOPrefix);
            if (!service) {
                throw new Error(`A file with the address "${addr}" is not supported`);
            }
            return service.download(addrWOPrefix, options);
        });
    }
    getAddrWOPrefix(addr) {
        if (!addr.startsWith(filestorage_class_const_2.FILE_STORAGE_SERVICE_PREFIX)) {
            throw new Error(`Unknown address ${addr}`);
        }
        return addr.slice(filestorage_class_const_2.FILE_STORAGE_SERVICE_PREFIX_LENGTH);
    }
    addPrefixToFileAddress(addrWOPrefix) {
        if (typeof addrWOPrefix !== 'string') {
            throw new Error('The result is not a valid file address');
        }
        return path_1.default.join(filestorage_class_const_2.FILE_STORAGE_SERVICE_PREFIX, addrWOPrefix);
    }
    getServiceById(serviceId) {
        return this.services.get(serviceId);
    }
    getServiceByType(serviceType) {
        return this.servicesByTypes.get(serviceType);
    }
    getServiceByTypeOrId(s) {
        return this.getServiceById(s) || this.getServiceByType(s);
    }
    getServiceConstructorByType(type) {
        const constructorGetter = filestorage_class_const_1.FILE_STORAGE_SERVICES_IMPLEMENTATIONS[type];
        return constructorGetter();
    }
    getServiceByFileAddr(addr) {
        for (const service of this.services.values()) {
            if (service.isFileServed(addr)) {
                return service;
            }
        }
        return undefined;
    }
    addService(type, service) {
        this.services.set(service.identifier, service);
        this.servicesByTypes.set(type, service);
    }
    removeService(service) {
        this.services.delete(service.identifier);
        this.servicesByTypes.delete(service.type);
    }
}
exports.FileStorage = FileStorage;
//# sourceMappingURL=filestorage-class.js.map