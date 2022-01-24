[@pashoo2/filestorage](../README.md) / [Exports](../modules.md) / IFileStorageService

# Interface: IFileStorageService<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FILE_STORAGE_SERVICE_TYPE`](../enums/file_storage_service_type.md) |

## Table of contents

### Properties

- [identifier](ifilestorageservice.md#identifier)
- [isSingleton](ifilestorageservice.md#issingleton)
- [status](ifilestorageservice.md#status)
- [type](ifilestorageservice.md#type)

### Methods

- [add](ifilestorageservice.md#add)
- [close](ifilestorageservice.md#close)
- [connect](ifilestorageservice.md#connect)
- [download](ifilestorageservice.md#download)
- [get](ifilestorageservice.md#get)
- [isFileServed](ifilestorageservice.md#isfileserved)

## Properties

### identifier

• **identifier**: `string`

unique name of the service, maybe url

**`memberof`** IFileStorageService

#### Defined in

[filestorage-class.types.ts:83](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L83)

___

### isSingleton

• **isSingleton**: `boolean`

is only the one implementation is allowed

**`memberof`** IFileStorageService

#### Defined in

[filestorage-class.types.ts:90](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L90)

___

### status

• **status**: [`FILE_STORAGE_SERVICE_STATUS`](../enums/file_storage_service_status.md)

the current status of the service

**`memberof`** IFileStorageService

#### Defined in

[filestorage-class.types.ts:69](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L69)

___

### type

• **type**: [`FILE_STORAGE_SERVICE_TYPE`](../enums/file_storage_service_type.md)

type of the service

**`memberof`** IFileStorageService

#### Defined in

[filestorage-class.types.ts:76](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L76)

## Methods

### add

▸ **add**(`filename`, `file`, `options?`): `Promise`<`string`\>

add the file to the service

**`throws`**

**`memberof`** IFileStorageService

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | filename, e.g. 'file.txt' |
| `file` | [`TFileStorageFile`](../modules.md#tfilestoragefile) | file content |
| `options?` | [`IFileStorageServiceFileAddCommonOptions`](ifilestorageservicefileaddcommonoptions.md) | - |

#### Returns

`Promise`<`string`\>

- returns an address of the file added,
which can be used to access the file

#### Defined in

[filestorage-class.types.ts:128](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L128)

___

### close

▸ **close**(): `Promise`<`void`\>

close connection to the service

**`memberof`** IFileStorageService

#### Returns

`Promise`<`void`\>

#### Defined in

[filestorage-class.types.ts:107](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L107)

___

### connect

▸ **connect**(`options`): `Promise`<`string`\>

initialize connection with the service

**`memberof`** IFileStorageService

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TFileStorageServiceOptions`](../modules.md#tfilestorageserviceoptions)<`T`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

[filestorage-class.types.ts:98](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L98)

___

### download

▸ **download**(`addr`, `options?`): `Promise`<`void`\>

download the file, do net necessary
to read it's content

**`memberof`** IFileStorageService

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |
| `options?` | [`TFileStorageServiceFileDownloadOptions`](../modules.md#tfilestorageservicefiledownloadoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[filestorage-class.types.ts:154](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L154)

___

### get

▸ **get**(`addr`, `options?`): `Promise`<`File`\>

get the file
TODO - add download progress callback

**`memberof`** IFileStorageService

**`throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addr` | `string` | address of the file |
| `options?` | [`TFileStorageServiceFileGetOptions`](../modules.md#tfilestorageservicefilegetoptions) | - |

#### Returns

`Promise`<`File`\>

- returns file itself

#### Defined in

[filestorage-class.types.ts:142](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L142)

___

### isFileServed

▸ **isFileServed**(`addr`): `boolean`

check whether a file with the address
is served by the service.

**`memberof`** IFileStorageService

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |

#### Returns

`boolean`

#### Defined in

[filestorage-class.types.ts:116](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.types.ts#L116)
