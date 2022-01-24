[@pashoo2/filestorage](../README.md) / [Exports](../modules.md) / IFileStorage

# Interface: IFileStorage<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FILE_STORAGE_SERVICE_TYPE`](../enums/file_storage_service_type.md) |

## Implemented by

- [`FileStorage`](../classes/filestorage.md)

## Table of contents

### Methods

- [add](ifilestorage.md#add)
- [close](ifilestorage.md#close)
- [connect](ifilestorage.md#connect)
- [download](ifilestorage.md#download)
- [get](ifilestorage.md#get)

## Methods

### add

▸ **add**(`service`, `filename`, `file`, `options?`): `Promise`<`string`\>

add the file to the service

**`throws`**

**`memberof`** IFileStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | `string` \| `T` | service identifier connected to, on which to upload the file |
| `filename` | `string` | filename, e.g. 'file.txt' |
| `file` | [`TFileStorageFile`](../modules.md#tfilestoragefile) | file content |
| `options?` | [`TFileStorageServiceFileAddOptions`](../modules.md#tfilestorageservicefileaddoptions) | - |

#### Returns

`Promise`<`string`\>

- returns an address of the file added,
which can be used to access the file

#### Defined in

[filestorage-class.types.ts:213](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L213)

___

### close

▸ **close**(`serviceId`): `Promise`<`void`\>

close the existing connection with the service
have the identifier provided

**`memberof`** IFileStorage

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[filestorage-class.types.ts:199](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L199)

___

### connect

▸ **connect**(`configurations`): `Promise`<`string`[]\>

connect to the file upload service

**`memberof`** IFileStorage

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurations` | [`IFileStorageServiceConnectOptions`](ifilestorageserviceconnectoptions.md)<`T`\>[] |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[filestorage-class.types.ts:188](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L188)

___

### download

▸ **download**(`addr`, `options?`): `Promise`<`void`\>

download the file, do net necessary
to read it's content

**`memberof`** IFileStorage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addr` | `string` | file address supported by services connected to |
| `options?` | [`TFileStorageServiceFileDownloadOptions`](../modules.md#tfilestorageservicefiledownloadoptions) | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[filestorage-class.types.ts:246](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L246)

___

### get

▸ **get**(`addr`, `options?`): `Promise`<`File`\>

get the file from the service

**`memberof`** IFileStorage

**`throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addr` | `string` | address of the file |
| `options?` | [`TFileStorageServiceFileGetOptions`](../modules.md#tfilestorageservicefilegetoptions) | - |

#### Returns

`Promise`<`File`\>

- returns file donwloaded from the service

#### Defined in

[filestorage-class.types.ts:231](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L231)
