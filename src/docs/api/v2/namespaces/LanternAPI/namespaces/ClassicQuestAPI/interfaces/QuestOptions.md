[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ClassicQuestAPI](../README.md) / QuestOptions

# Interface: QuestOptions

Options of a quest.

## Properties

### award

> **award**: [`QuestAward`](QuestAward.md)

It will be called when the Quest is completed by the player.

#### Source

api/quest.ts:501

***

### condition

> **condition**: [`QuestCondition`](QuestCondition.md)

Condition to complete the quest.

#### Source

api/quest.ts:497

***

### iconPath?

> `optional` **iconPath**: `string`

The icon of the Quest.
It should be the path from the root of the resource pack.

#### Example

```ts
texture/gui/example_pic
```

#### Source

api/quest.ts:507
