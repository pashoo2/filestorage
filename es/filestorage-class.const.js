"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_STORAGE_SERVICE_PREFIX_LENGTH = exports.FILE_STORAGE_SERVICE_PREFIX = exports.FILE_STORAGE_SERVICES_IMPLEMENTATIONS = exports.FILE_STORAGE_SERVICE_TYPE = exports.FILE_STORAGE_SERVICE_STATUS = void 0;
/**
 * status of a service
 *
 * @export
 * @enum {number}
 */
var FILE_STORAGE_SERVICE_STATUS;
(function (FILE_STORAGE_SERVICE_STATUS) {
    /**
     * ready to use
     */
    FILE_STORAGE_SERVICE_STATUS["READY"] = "READY";
    /**
     * connecting to the service
     */
    FILE_STORAGE_SERVICE_STATUS["CONNECTING"] = "CONNECTING";
    /**
     * not ready - may be disconnected or still not connected to
     */
    FILE_STORAGE_SERVICE_STATUS["NOT_READY"] = "NOT_READY";
    /**
     * fault on connecting or file uploading
     * and means that the service can't be used
     * anymore
     */
    FILE_STORAGE_SERVICE_STATUS["ERROR"] = "ERROR";
})(FILE_STORAGE_SERVICE_STATUS = exports.FILE_STORAGE_SERVICE_STATUS || (exports.FILE_STORAGE_SERVICE_STATUS = {}));
/**
 * service type
 *
 * @export
 * @enum {number}
 */
var FILE_STORAGE_SERVICE_TYPE;
(function (FILE_STORAGE_SERVICE_TYPE) {
    FILE_STORAGE_SERVICE_TYPE["IPFS"] = "IPFS";
    FILE_STORAGE_SERVICE_TYPE["HTTP"] = "HTTP";
    // will be added in the feature
    // AMAZONS3 = 'AMAZONS3',
    // AZUREBLOB = 'AZUREBLOB',
})(FILE_STORAGE_SERVICE_TYPE = exports.FILE_STORAGE_SERVICE_TYPE || (exports.FILE_STORAGE_SERVICE_TYPE = {}));
// implementations of the services.
// will be loaded only if required
exports.FILE_STORAGE_SERVICES_IMPLEMENTATIONS = {
    [FILE_STORAGE_SERVICE_TYPE.IPFS]: () => Promise.resolve().then(() => __importStar(require('./filestorage-class-providers/filestorage-class-provider-ipfs'))),
    [FILE_STORAGE_SERVICE_TYPE.HTTP]: () => Promise.resolve().then(() => __importStar(require('./filestorage-class-providers/filestorage-class-provider-http'))),
};
exports.FILE_STORAGE_SERVICE_PREFIX = '/file';
exports.FILE_STORAGE_SERVICE_PREFIX_LENGTH = exports.FILE_STORAGE_SERVICE_PREFIX.length;
//# sourceMappingURL=filestorage-class.const.js.map