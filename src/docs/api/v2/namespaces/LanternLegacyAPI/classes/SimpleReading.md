[**project-lantern**](../../../README.md) • **Docs**

***

[project-lantern](../../../globals.md) / [LanternLegacyAPI](../README.md) / SimpleReading

# Class: SimpleReading

Create a simple reading in game.

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

api/legacy/readings.ts:55

## Properties

### body

> **body**: `string` \| `RawMessage`

Body of the reading.

#### Inherited from

[`Reading`](Reading.md).[`body`](Reading.md#body)

#### Source

api/legacy/readings.ts:20

***

### id

> **id**: `string`

Id of the reading.

#### Inherited from

[`Reading`](Reading.md).[`id`](Reading.md#id)

#### Source

api/legacy/readings.ts:12

***

### isChapter

> **isChapter**: `boolean`

If true, the reading will not display when player use the item.

#### Source

api/legacy/readings.ts:44

***

### title

> **title**: `string` \| `RawMessage`

Title of the reading.

#### Inherited from

[`Reading`](Reading.md).[`title`](Reading.md#title)

#### Source

api/legacy/readings.ts:16

## Methods

### display()

> **display**(`player`): `void`

Display the reading to a player.

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

api/legacy/readings.ts:48
