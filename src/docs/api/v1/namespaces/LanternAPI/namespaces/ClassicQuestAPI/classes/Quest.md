[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ClassicQuestAPI](../README.md) / Quest

# Class: Quest

Create a Quest.

## Constructors

### new Quest()

> **new Quest**(`id`, `_title`, `_body`, `options`): [`Quest`](Quest.md)

#### Parameters

• **id**: `string`

The unique id of the Quest.

• **\_title**: `string` \| `RawMessage`

Title of the  QuestBook.

• **\_body**: `string` \| `RawMessage`

Body of the  QuestBook.

• **options**: [`QuestOptions`](../interfaces/QuestOptions.md)

Options of the quest.

#### Returns

[`Quest`](Quest.md)

#### Source

api/quest.ts:27

## Properties

### \_body

> `protected` **\_body**: `string` \| `RawMessage`

Body of the  QuestBook.

#### Source

api/quest.ts:39

***

### \_title

> `protected` **\_title**: `string` \| `RawMessage`

Title of the  QuestBook.

#### Source

api/quest.ts:35

***

### form

> `protected` **form**: `MessageFormData`

#### Source

api/quest.ts:26

***

### id

> `readonly` **id**: `string`

The unique id of the Quest.

#### Source

api/quest.ts:31

***

### options

> **options**: [`QuestOptions`](../interfaces/QuestOptions.md)

Options of the quest.

#### Source

api/quest.ts:43

## Accessors

### body

> `get` **body**(): `string` \| `RawMessage`

> `set` **body**(`content`): `void`

#### Parameters

• **content**: `string` \| `RawMessage`

#### Returns

`string` \| `RawMessage`

#### Source

api/quest.ts:110

***

### title

> `get` **title**(): `string` \| `RawMessage`

> `set` **title**(`content`): `void`

#### Parameters

• **content**: `string` \| `RawMessage`

#### Returns

`string` \| `RawMessage`

#### Source

api/quest.ts:113

## Methods

### complete()

> **complete**(`player`): `void`

Let a player complete the quest and give award.

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

api/quest.ts:84

***

### display()

> **display**(`player`, `book`?): `void`

Show form to a player.

#### Parameters

• **player**: `Player`

• **book?**: [`QuestBook`](QuestBook.md)

#### Returns

`void`

#### Source

api/quest.ts:50

***

### isCompleted()

> **isCompleted**(`player`): `boolean`

Check if a player has completed this quest.

#### Parameters

• **player**: `Player`

#### Returns

`boolean`

#### Source

api/quest.ts:99
