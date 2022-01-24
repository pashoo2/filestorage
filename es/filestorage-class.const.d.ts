/**
 * status of a service
 *
 * @export
 * @enum {number}
 */
export declare enum FILE_STORAGE_SERVICE_STATUS {
    /**
     * ready to use
     */
    READY = "READY",
    /**
     * connecting to the service
     */
    CONNECTING = "CONNECTING",
    /**
     * not ready - may be disconnected or still not connected to
     */
    NOT_READY = "NOT_READY",
    /**
     * fault on connecting or file uploading
     * and means that the service can't be used
     * anymore
     */
    ERROR = "ERROR"
}
/**
 * service type
 *
 * @export
 * @enum {number}
 */
export declare enum FILE_STORAGE_SERVICE_TYPE {
    IPFS = "IPFS",
    HTTP = "HTTP"
}
export declare const FILE_STORAGE_SERVICES_IMPLEMENTATIONS: Record<FILE_STORAGE_SERVICE_TYPE, () => Promise<any>>;
export declare const FILE_STORAGE_SERVICE_PREFIX = "/file";
export declare const FILE_STORAGE_SERVICE_PREFIX_LENGTH: number;
