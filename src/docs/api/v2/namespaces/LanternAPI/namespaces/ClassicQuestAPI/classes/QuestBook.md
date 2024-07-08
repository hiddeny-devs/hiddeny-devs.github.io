[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ClassicQuestAPI](../README.md) / QuestBook

# Class: QuestBook

Create a quest book.

## Constructors

### new QuestBook()

> **new QuestBook**(`id`, `title`, `body`, `options`): [`QuestBook`](QuestBook.md)

#### Parameters

• **id**: `string`

The unique id of the QuestBook.

• **title**: `string` \| `RawMessage`

Title of the  QuestBook.

• **body**: `string` \| `RawMessage`

Body of the QuestBook.

• **options**: [`QuestBookOptions`](../interfaces/QuestBookOptions.md)

Options of the quest book.

#### Returns

[`QuestBook`](QuestBook.md)

#### Source

api/quest.ts:122

## Properties

### body

> **body**: `string` \| `RawMessage`

Body of the QuestBook.

#### Source

api/quest.ts:134

***

### id

> `readonly` **id**: `string`

The unique id of the QuestBook.

#### Source

api/quest.ts:126

***

### options

> **options**: [`QuestBookOptions`](../interfaces/QuestBookOptions.md)

Options of the quest book.

#### Source

api/quest.ts:138

***

### title

> **title**: `string` \| `RawMessage`

Title of the  QuestBook.

#### Source

api/quest.ts:130

## Methods

### addQuest()

> **addQuest**(`quest`, `message`?): `void`

Add a quest.

#### Parameters

• **quest**: [`Quest`](Quest.md)

• **message?**: `string` \| `RawMessage`

Optional information will be sent to world.

#### Returns

`void`

#### Source

api/quest.ts:177

***

### display()

> **display**(`player`): `void`

Display the book to the player.

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

api/quest.ts:155

***

### getQuest()

> **getQuest**(`id`): `undefined` \| [`Quest`](Quest.md)

Get the quest by id.

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| [`Quest`](Quest.md)

#### Source

api/quest.ts:188

***

### getQuests()

> **getQuests**(): [`Quest`](Quest.md)[]

Get all quests.

#### Returns

[`Quest`](Quest.md)[]

#### Source

api/quest.ts:194

***

### register()

> `protected` **register**(): `void`

Registry the quest book to game.

#### Returns

`void`

#### Source

api/quest.ts:145
