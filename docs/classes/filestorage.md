[@pashoo2/filestorage](../README.md) / [Exports](../modules.md) / FileStorage

# Class: FileStorage<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FILE_STORAGE_SERVICE_TYPE`](../enums/file_storage_service_type.md) |

## Implements

- [`IFileStorage`](../interfaces/ifilestorage.md)<`T`\>

## Table of contents

### Constructors

- [constructor](filestorage.md#constructor)

### Properties

- [services](filestorage.md#services)
- [servicesByTypes](filestorage.md#servicesbytypes)

### Methods

- [add](filestorage.md#add)
- [addPrefixToFileAddress](filestorage.md#addprefixtofileaddress)
- [addService](filestorage.md#addservice)
- [close](filestorage.md#close)
- [connect](filestorage.md#connect)
- [connectToService](filestorage.md#connecttoservice)
- [download](filestorage.md#download)
- [get](filestorage.md#get)
- [getAddrWOPrefix](filestorage.md#getaddrwoprefix)
- [getServiceByFileAddr](filestorage.md#getservicebyfileaddr)
- [getServiceById](filestorage.md#getservicebyid)
- [getServiceByType](filestorage.md#getservicebytype)
- [getServiceByTypeOrId](filestorage.md#getservicebytypeorid)
- [getServiceConstructorByType](filestorage.md#getserviceconstructorbytype)
- [removeService](filestorage.md#removeservice)

## Constructors

### constructor

• **new FileStorage**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FILE_STORAGE_SERVICE_TYPE`](../enums/file_storage_service_type.md) |

## Properties

### services

• `Protected` `Readonly` **services**: `Map`<`string`, [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>\>

#### Defined in

[filestorage-class.ts:32](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L32)

___

### servicesByTypes

• `Protected` `Readonly` **servicesByTypes**: `Map`<`T`, [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>\>

#### Defined in

[filestorage-class.ts:37](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L37)

## Methods

### add

▸ **add**(`s`, `filename`, `file`, `options?`): `Promise`<`string`\>

add the file to the service

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` \| `T` |
| `filename` | `string` |
| `file` | [`TFileStorageFile`](../modules.md#tfilestoragefile) |
| `options?` | [`TFileStorageServiceFileAddOptions`](../modules.md#tfilestorageservicefileaddoptions) |

#### Returns

`Promise`<`string`\>

#### Implementation of

[IFileStorage](../interfaces/ifilestorage.md).[add](../interfaces/ifilestorage.md#add)

#### Defined in

[filestorage-class.ts:56](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L56)

___

### addPrefixToFileAddress

▸ `Protected` **addPrefixToFileAddress**(`addrWOPrefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addrWOPrefix` | `string` |

#### Returns

`string`

#### Defined in

[filestorage-class.ts:107](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L107)

___

### addService

▸ `Protected` **addService**<`ST`\>(`type`, `service`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ST` | extends [`FILE_STORAGE_SERVICE_TYPE`](../enums/file_storage_service_type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `ST` |
| `service` | [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`ST`\> |

#### Returns

`void`

#### Defined in

[filestorage-class.ts:144](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L144)

___

### close

▸ **close**(`s`): `Promise`<`void`\>

close the existing connection with the service
have the identifier provided

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IFileStorage](../interfaces/ifilestorage.md).[close](../interfaces/ifilestorage.md#close)

#### Defined in

[filestorage-class.ts:45](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L45)

___

### connect

▸ **connect**(`configurations`): `Promise`<`string`[]\>

connect to the file upload service

#### Parameters

| Name | Type |
| :------ | :------ |
| `configurations` | [`IFileStorageServiceConnectOptions`](../interfaces/ifilestorageserviceconnectoptions.md)<`T`\>[] |

#### Returns

`Promise`<`string`[]\>

#### Implementation of

[IFileStorage](../interfaces/ifilestorage.md).[connect](../interfaces/ifilestorage.md#connect)

#### Defined in

[filestorage-class.ts:39](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L39)

___

### connectToService

▸ `Protected` **connectToService**(`configuration`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`IFileStorageServiceConnectOptions`](../interfaces/ifilestorageserviceconnectoptions.md)<`T`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

[filestorage-class.ts:157](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L157)

___

### download

▸ **download**(`addr`, `options?`): `Promise`<`void`\>

download the file, do net necessary
to read it's content

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |
| `options?` | [`TFileStorageServiceFileDownloadOptions`](../modules.md#tfilestorageservicefiledownloadoptions) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IFileStorage](../interfaces/ifilestorage.md).[download](../interfaces/ifilestorage.md#download)

#### Defined in

[filestorage-class.ts:87](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L87)

___

### get

▸ **get**(`addr`, `options?`): `Promise`<`File`\>

get the file from the service

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |
| `options?` | [`TFileStorageServiceFileGetOptions`](../modules.md#tfilestorageservicefilegetoptions) |

#### Returns

`Promise`<`File`\>

#### Implementation of

[IFileStorage](../interfaces/ifilestorage.md).[get](../interfaces/ifilestorage.md#get)

#### Defined in

[filestorage-class.ts:74](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L74)

___

### getAddrWOPrefix

▸ `Protected` **getAddrWOPrefix**(`addr`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |

#### Returns

`string`

#### Defined in

[filestorage-class.ts:100](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L100)

___

### getServiceByFileAddr

▸ `Protected` **getServiceByFileAddr**(`addr`): `undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr` | `string` |

#### Returns

`undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Defined in

[filestorage-class.ts:133](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L133)

___

### getServiceById

▸ `Protected` **getServiceById**(`serviceId`): `undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceId` | `string` |

#### Returns

`undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Defined in

[filestorage-class.ts:116](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L116)

___

### getServiceByType

▸ `Protected` **getServiceByType**(`serviceType`): `undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceType` | `T` |

#### Returns

`undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Defined in

[filestorage-class.ts:120](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L120)

___

### getServiceByTypeOrId

▸ `Protected` **getServiceByTypeOrId**(`s`): `undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` \| `T` |

#### Returns

`undefined` \| [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\>

#### Defined in

[filestorage-class.ts:124](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L124)

___

### getServiceConstructorByType

▸ `Protected` **getServiceConstructorByType**(`type`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`FILE_STORAGE_SERVICE_TYPE`](../enums/file_storage_service_type.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[filestorage-class.ts:128](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L128)

___

### removeService

▸ `Protected` **removeService**(`service`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`IFileStorageService`](../interfaces/ifilestorageservice.md)<`T`\> |

#### Returns

`void`

#### Defined in

[filestorage-class.ts:152](https://github.com/pashoo2/filestorage/blob/f78b5fb/src/filestorage-class.ts#L152)
