[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ClassicQuestAPI](../README.md) / QuestBookOptions

# Interface: QuestBookOptions

## Properties

### iconPath?

> `optional` **iconPath**: `string`

The icon of the Quest Book.
It should be the path from the root of the resource pack.

#### Example

```ts
texture/gui/example_pic
```

#### Source

api/quest.ts:520

***

### quests

> `readonly` **quests**: [`Quest`](../classes/Quest.md)[]

Quests of the Questbook.

#### Source

api/quest.ts:514
