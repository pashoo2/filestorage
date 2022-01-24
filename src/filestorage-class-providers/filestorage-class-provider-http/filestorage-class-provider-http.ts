import {downloadFileByUrl} from '@pashoo2/files-utils';
import {HttpRequest, HTTP_REQUEST_MODE} from '@pashoo2/http-request';

import {
  FILE_STORAGE_SERVICE_STATUS,
  FILE_STORAGE_SERVICE_TYPE,
} from '../../filestorage-class.const';
import {
  IFileStorageClassProviderHTTPFileGetOptions,
  IFileStorageClassProviderHTTPFileAddOptions,
} from './filestorage-class-provider-http.types';
import {
  FILE_STORAGE_PROVIDER_HTTP_TYPE,
  FILE_STORAGE_PROVIDER_HTTP_IDENTIFIER,
} from './filestorage-class-provider-http.const';

import {
  IFileStorageService,
  TFileStorageFileAddress,
} from '../../filestorage-class.types';
import {TFileStorageFile} from '../../filestorage-class.types';

export class FileStorageClassProviderHTTP
  implements IFileStorageService<FILE_STORAGE_SERVICE_TYPE.HTTP>
{
  public type = FILE_STORAGE_PROVIDER_HTTP_TYPE;

  public readonly isSingleton = true;

  public readonly identifier = FILE_STORAGE_PROVIDER_HTTP_IDENTIFIER;

  public get status() {
    return FILE_STORAGE_SERVICE_STATUS.READY;
  }

  public isFileServed(addr: TFileStorageFileAddress): boolean {
    return addr.startsWith('/http') || this.isBlobAddr(addr);
  }

  public async connect(options: {}): Promise<string> {
    return FILE_STORAGE_PROVIDER_HTTP_IDENTIFIER;
  }

  public async close() {}

  public add = async (
    filename: string,
    file: TFileStorageFile,
    options?: {}
  ): Promise<TFileStorageFileAddress> => {
    throw new Error('The HTTP provider does not supports files uploading');
  };

  public get = async (
    addr: TFileStorageFileAddress,
    options?: IFileStorageClassProviderHTTPFileGetOptions
  ): Promise<File> => {
    const urlNormalized = this.getFileURL(addr);
    const req = new HttpRequest({
      credentials: 'include',
      mode: HTTP_REQUEST_MODE.CORS,
      ...options,
      url: urlNormalized,
    });
    const result = await req.send();

    if (!(result instanceof File)) {
      throw new Error('Failed to get the file from the network');
    }
    return result;
  };

  public download = async (
    addr: TFileStorageFileAddress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _options?: IFileStorageClassProviderHTTPFileAddOptions
  ) => {
    const urlNormalized = this.getFileURL(addr);

    downloadFileByUrl(urlNormalized);
  };

  protected isBlobAddr(addr: TFileStorageFileAddress): boolean {
    return addr.startsWith('/data:');
  }

  protected getFileURL(addr: TFileStorageFileAddress): string {
    if (this.isBlobAddr(addr)) {
      return addr.slice(1);
    }

    const isHttps = addr.startsWith('/https');
    const protocol = isHttps ? 'https://' : 'http://';
    const addrWithoutPrefix = (isHttps ? addr.slice(6) : addr.slice(5)).replace(
      /^\W+/,
      ''
    );
    const resultedUrl = `${protocol}${addrWithoutPrefix}`;

    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    return String(new URL(resultedUrl));
  }
}
