[**project-lantern**](../README.md) • **Docs**

***

[project-lantern](../globals.md) / ChapterReading

# Class: ChapterReading

创建一个带有章节的的阅读物

## Since

0.4.0

## Extends

- [`Reading`](Reading.md)

## Constructors

### new ChapterReading()

> **new ChapterReading**(`id`, `title`, `body`, `chapters`): [`ChapterReading`](ChapterReading.md)

#### Parameters

• **id**: `string`

• **title**: `string` \| `RawMessage`

• **body**: `string` \| `RawMessage`

• **chapters**: [`SimpleReading`](SimpleReading.md)[]

#### Returns

[`ChapterReading`](ChapterReading.md)

#### Overrides

[`Reading`](Reading.md).[`constructor`](Reading.md#constructors)

#### Source

server/items/reading.ts:97

## Properties

### body

> **body**: `string` \| `RawMessage`

阅读物的内容

#### Inherited from

[`Reading`](Reading.md).[`body`](Reading.md#body)

#### Source

server/items/reading.ts:25

***

### chapters

> **chapters**: [`SimpleReading`](SimpleReading.md)[]

阅读物章节

#### Source

server/items/reading.ts:80

***

### id

> **id**: `string`

阅读物的Id

#### Inherited from

[`Reading`](Reading.md).[`id`](Reading.md#id)

#### Source

server/items/reading.ts:17

***

### title

> **title**: `string` \| `RawMessage`

阅读物的标题

#### Inherited from

[`Reading`](Reading.md).[`title`](Reading.md#title)

#### Source

server/items/reading.ts:21

## Methods

### display()

> **display**(`player`): `void`

向玩家展示阅读物

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

server/items/reading.ts:84
