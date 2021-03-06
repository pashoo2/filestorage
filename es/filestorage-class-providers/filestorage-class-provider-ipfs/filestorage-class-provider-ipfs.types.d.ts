import { IFileStorageServiceFileAddCommonOptions } from '../../filestorage-class.types';
import { IPFS } from '../../types/ipfs';
/**
 * this is options used by the file storage class
 *
 * @export
 * @interface IFileStorageClassProviderIPFSOptions
 */
export interface IFileStorageClassProviderIPFSOptions {
    /**
     * instance of the IPFS, running and
     * ready to use
     *
     * @type {IPFS}
     * @memberof IFileStorageClassProviderIPFSOptions
     */
    ipfs: IPFS;
    /**
     * the prefix for each path of a file uploaded
     *
     * @type {string}
     * @memberof IFileStorageClassProviderIPFSOptions
     */
    rootPath?: string;
}
export interface IFileStorageClassProviderIPFSFileAddOptions extends IFileStorageServiceFileAddCommonOptions {
    /**
     * hunking algorithm used to build ipfs DAGs. Available formats:
     * size-{size}
     * rabin
     * rabin-{avg}
     * rabin-{min}-{avg}-{max}
     */
    chunker?: string;
    /**
     * (integer, default 0): the CID version to use when storing the data (storage keys are based on the CID, including its version).
     */
    cidVersion?: number;
    /**
     * (boolean, default false): if true will use the trickle DAG format for DAG generation. Trickle definition from go-ipfs documentation.
     */
    trickle?: boolean;
    /**
     * adds a wrapping node around the content.
     */
    wrapWithDirectory?: boolean;
}
export interface IFileStorageClassProviderIPFSFileGetOptions {
}
export interface IFileStorageClassProviderIPFSFileDownloadOptions extends IFileStorageClassProviderIPFSFileGetOptions {
}
