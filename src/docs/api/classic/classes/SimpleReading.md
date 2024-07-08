[**project-lantern**](../README.md) • **Docs**

***

[project-lantern](../globals.md) / SimpleReading

# Class: SimpleReading

创建一个最简单的阅读物

## Since

0.3.1

## Example

```ts
const EXAMPLE_READING = new SimpleReading("test:example_reading","示例阅读物", "示例内容");
```

## Extends

- [`Reading`](Reading.md)

## Constructors

### new SimpleReading()

> **new SimpleReading**(`id`, `title`, `body`, `isChapter`): [`SimpleReading`](SimpleReading.md)

#### Parameters

• **id**: `string`

• **title**: `string` \| `RawMessage`

• **body**: `string` \| `RawMessage`

• **isChapter**: `boolean`= `false`

#### Returns

[`SimpleReading`](SimpleReading.md)

#### Overrides

[`Reading`](Reading.md).[`constructor`](Reading.md#constructors)

#### Source

server/items/reading.ts:52

## Properties

### body

> **body**: `string` \| `RawMessage`

阅读物的内容

#### Inherited from

[`Reading`](Reading.md).[`body`](Reading.md#body)

#### Source

server/items/reading.ts:25

***

### id

> **id**: `string`

阅读物的Id

#### Inherited from

[`Reading`](Reading.md).[`id`](Reading.md#id)

#### Source

server/items/reading.ts:17

***

### isChapter

> **isChapter**: `boolean`

判断阅读物是否为书籍的章节

#### Source

server/items/reading.ts:41

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

server/items/reading.ts:45
