[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ClassicQuestAPI](../README.md) / QuestChapter

# Interface: QuestChapter

Chapters of a quest book.

## Properties

### body

> **body**: `string` \| `RawMessage`

Body of the chapter.

#### Source

api/quest.ts:441

***

### iconPath?

> `optional` **iconPath**: `string`

The icon of the Chapter.
It should be the path from the root of the resource pack.

#### Example

```ts
texture/gui/example_pic
```

#### Source

api/quest.ts:451

***

### quests

> **quests**: [`Quest`](../classes/Quest.md)[]

Quests of the chapter.

#### Source

api/quest.ts:445

***

### title

> **title**: `string` \| `RawMessage`

Title of the chapter.

#### Source

api/quest.ts:437
