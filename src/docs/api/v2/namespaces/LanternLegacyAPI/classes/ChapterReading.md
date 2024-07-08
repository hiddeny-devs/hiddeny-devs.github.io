[**project-lantern**](../../../README.md) • **Docs**

***

[project-lantern](../../../globals.md) / [LanternLegacyAPI](../README.md) / ChapterReading

# Class: ChapterReading

Create a reading with chapters.

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

api/legacy/readings.ts:98

## Properties

### body

> **body**: `string` \| `RawMessage`

Body of the reading.

#### Inherited from

[`Reading`](Reading.md).[`body`](Reading.md#body)

#### Source

api/legacy/readings.ts:20

***

### chapters

> **chapters**: [`SimpleReading`](SimpleReading.md)[]

Chapters of the reading.

#### Source

api/legacy/readings.ts:81

***

### id

> **id**: `string`

Id of the reading.

#### Inherited from

[`Reading`](Reading.md).[`id`](Reading.md#id)

#### Source

api/legacy/readings.ts:12

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

api/legacy/readings.ts:85
