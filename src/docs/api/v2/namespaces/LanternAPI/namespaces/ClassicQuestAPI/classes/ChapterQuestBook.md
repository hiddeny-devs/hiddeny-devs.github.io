[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ClassicQuestAPI](../README.md) / ChapterQuestBook

# Class: ChapterQuestBook

Create a Quest Book with Chapters.

## Constructors

### new ChapterQuestBook()

> **new ChapterQuestBook**(`id`, `title`, `body`, `chapters`): [`ChapterQuestBook`](ChapterQuestBook.md)

#### Parameters

• **id**: `string`

The unique id of the QuestBook.

• **title**: `string` \| `RawMessage`

Title of the  QuestBook.

• **body**: `string` \| `RawMessage`

Body of the Questbook.

• **chapters**: [`QuestChapter`](../interfaces/QuestChapter.md)[]

Chapters of the Questbook.

#### Returns

[`ChapterQuestBook`](ChapterQuestBook.md)

#### Source

api/quest.ts:204

## Properties

### body

> `protected` **body**: `string` \| `RawMessage`

Body of the Questbook.

#### Source

api/quest.ts:216

***

### chapters

> **chapters**: [`QuestChapter`](../interfaces/QuestChapter.md)[]

Chapters of the Questbook.

#### Source

api/quest.ts:220

***

### id

> `readonly` **id**: `string`

The unique id of the QuestBook.

#### Source

api/quest.ts:208

***

### title

> `protected` **title**: `string` \| `RawMessage`

Title of the  QuestBook.

#### Source

api/quest.ts:212

## Methods

### display()

> **display**(`player`): `void`

Display the book to the player.

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

api/quest.ts:237

***

### register()

> **register**(): `void`

Registry the quest book to game.

#### Returns

`void`

#### Source

api/quest.ts:227
