[@pashoo2/filestorage](README.md) / Exports

# @pashoo2/filestorage

## Table of contents

### Enumerations

- [FILE\_STORAGE\_SERVICE\_STATUS](enums/file_storage_service_status.md)
- [FILE\_STORAGE\_SERVICE\_TYPE](enums/file_storage_service_type.md)

### Classes

- [FileStorage](classes/filestorage.md)

### Interfaces

- [IFileStorage](interfaces/ifilestorage.md)
- [IFileStorageService](interfaces/ifilestorageservice.md)
- [IFileStorageServiceConnectOptions](interfaces/ifilestorageserviceconnectoptions.md)
- [IFileStorageServiceFileAddCommonOptions](interfaces/ifilestorageservicefileaddcommonoptions.md)

### Type aliases

- [TFileStorageFile](modules.md#tfilestoragefile)
- [TFileStorageFileAddress](modules.md#tfilestoragefileaddress)
- [TFileStorageServiceFileAddOptions](modules.md#tfilestorageservicefileaddoptions)
- [TFileStorageServiceFileDownloadOptions](modules.md#tfilestorageservicefiledownloadoptions)
- [TFileStorageServiceFileGetOptions](modules.md#tfilestorageservicefilegetoptions)
- [TFileStorageServiceIdentifier](modules.md#tfilestorageserviceidentifier)
- [TFileStorageServiceOptions](modules.md#tfilestorageserviceoptions)

### Variables

- [FILE\_STORAGE\_SERVICES\_IMPLEMENTATIONS](modules.md#file_storage_services_implementations)
- [FILE\_STORAGE\_SERVICE\_PREFIX](modules.md#file_storage_service_prefix)
- [FILE\_STORAGE\_SERVICE\_PREFIX\_LENGTH](modules.md#file_storage_service_prefix_length)

## Type aliases

### TFileStorageFile

Ƭ **TFileStorageFile**: `ArrayBuffer` \| `Buffer` \| `Blob` \| `File`

#### Defined in

[filestorage-class.types.ts:44](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L44)

___

### TFileStorageFileAddress

Ƭ **TFileStorageFileAddress**: `string`

multiaddr or address in the ipfs:
'/ipfs/QmXEmhrMpbVvTh61FNAxP9nU7ygVtyvZA8HZDUaqQCAb66',
'/ipfs/QmXEmhrMpbVvTh61FNAxP9nU7ygVtyvZA8HZDUaqQCAb66/a.txt'
or if http file:
'/http/server.com:3000/download/file.pdf',
'/https/upload.com/?d=f'

#### Defined in

[filestorage-class.types.ts:54](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L54)

___

### TFileStorageServiceFileAddOptions

Ƭ **TFileStorageServiceFileAddOptions**: `IFileStorageClassProviderIPFSFileAddOptions` \| `IFileStorageClassProviderHTTPFileAddOptions`

#### Defined in

[filestorage-class.types.ts:28](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L28)

___

### TFileStorageServiceFileDownloadOptions

Ƭ **TFileStorageServiceFileDownloadOptions**: `IFileStorageClassProviderHTTPFileDownloadOptions` \| `IFileStorageClassProviderIPFSFileDownloadOptions`

#### Defined in

[filestorage-class.types.ts:36](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L36)

___

### TFileStorageServiceFileGetOptions

Ƭ **TFileStorageServiceFileGetOptions**: `IFileStorageClassProviderIPFSFileGetOptions` \| `IFileStorageClassProviderHTTPFileGetOptions`

#### Defined in

[filestorage-class.types.ts:32](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L32)

___

### TFileStorageServiceIdentifier

Ƭ **TFileStorageServiceIdentifier**: `string`

unique identifier of the service connected to,
may be an url or another string

#### Defined in

[filestorage-class.types.ts:60](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L60)

___

### TFileStorageServiceOptions

Ƭ **TFileStorageServiceOptions**<`T`\>: `T` extends [`IPFS`](enums/file_storage_service_type.md#ipfs) ? `IFileStorageClassProviderIPFSOptions` : `T` extends [`HTTP`](enums/file_storage_service_type.md#http) ? `IFileStorageClassProviderHTTPOptions` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FILE_STORAGE_SERVICE_TYPE`](enums/file_storage_service_type.md) |

#### Defined in

[filestorage-class.types.ts:21](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L21)

## Variables

### FILE\_STORAGE\_SERVICES\_IMPLEMENTATIONS

• `Const` **FILE\_STORAGE\_SERVICES\_IMPLEMENTATIONS**: `Record`<[`FILE_STORAGE_SERVICE_TYPE`](enums/file_storage_service_type.md), `fn`\>

#### Defined in

[filestorage-class.const.ts:44](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.const.ts#L44)

___

### FILE\_STORAGE\_SERVICE\_PREFIX

• `Const` **FILE\_STORAGE\_SERVICE\_PREFIX**: ``"/file"``

#### Defined in

[filestorage-class.const.ts:54](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.const.ts#L54)

___

### FILE\_STORAGE\_SERVICE\_PREFIX\_LENGTH

• `Const` **FILE\_STORAGE\_SERVICE\_PREFIX\_LENGTH**: `number`

#### Defined in

[filestorage-class.const.ts:56](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.const.ts#L56)
