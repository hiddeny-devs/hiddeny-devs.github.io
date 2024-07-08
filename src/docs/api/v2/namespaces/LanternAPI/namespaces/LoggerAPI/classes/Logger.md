[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [LoggerAPI](../README.md) / Logger

# Class: Logger

## Constructors

### new Logger()

> `private` **new Logger**(`id`, `feedback`?): [`Logger`](Logger.md)

#### Parameters

• **id**: `string`

• **feedback?**: `string`

#### Returns

[`Logger`](Logger.md)

#### Source

api/logger.ts:66

## Properties

### feedback

> `private` `readonly` **feedback**: `undefined` \| `string`

#### Source

api/logger.ts:64

***

### id

> `private` `readonly` **id**: `string`

#### Source

api/logger.ts:63

## Methods

### debug()

> **debug**(`message`, `players`?): `void`

Log with [LogLevel.DEBUG](../enumerations/LogLevel.md#debug)

#### Parameters

• **message**: `string`

• **players?**: `Player`[]

#### Returns

`void`

#### Source

api/logger.ts:118

***

### error()

> **error**(`message`, `players`?): `void`

Same as console.error.

#### Parameters

• **message**: `string`

• **players?**: `Player`[]

the players that would receive stack trace.

#### Returns

`void`

#### Source

api/logger.ts:171

***

### fatal()

> **fatal**(`message`): `void`

Same as `error()`, but the stack trace will be sent to all players

#### Parameters

• **message**: `string`

#### Returns

`void`

#### Source

api/logger.ts:187

***

### getLogLevel()

> **getLogLevel**(`player`?): [`LogLevel`](../enumerations/LogLevel.md)

Get player(or the world)'s LogLevel.

#### Parameters

• **player?**: `Player`

#### Returns

[`LogLevel`](../enumerations/LogLevel.md)

#### Source

api/logger.ts:97

***

### info()

> **info**(`message`, `players`?): `void`

Log with [LogLevel.INFO](../enumerations/LogLevel.md#info)
The message will be sent to world if no players are given.

#### Parameters

• **message**: `string`

• **players?**: `Player`[]

#### Returns

`void`

#### Source

api/logger.ts:136

***

### log()

> **log**(`message`, `players`?): `void`

The `log()` function is an alias for [info](Logger.md#info).

#### Parameters

• **message**: `string`

• **players?**: `Player`[]

#### Returns

`void`

#### Source

api/logger.ts:109

***

### setLogLevel()

> **setLogLevel**(`level`, `player`?): `void`

Set player(or the world)'s LogLevel.

#### Parameters

• **level**: [`LogLevel`](../enumerations/LogLevel.md)

• **player?**: `Player`

#### Returns

`void`

#### Source

api/logger.ts:85

***

### warn()

> **warn**(`message`, `players`?): `void`

Same as console.warn.

#### Parameters

• **message**: `string`

• **players?**: `Player`[]

the players that would receive stack trace.

#### Returns

`void`

#### Source

api/logger.ts:153

***

### getLogger()

> `static` **getLogger**(`id`?, `feedback`?): [`Logger`](Logger.md)

Get a new Logger

#### Parameters

• **id?**: `string`

if it's not set, the value will be te result of the `getModName()`.

• **feedback?**: `string`

the info which will be sent when an error or a fatal error.

#### Returns

[`Logger`](Logger.md)

#### Source

api/logger.ts:76
