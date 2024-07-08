[**project-lantern**](../README.md) • **Docs**

***

[project-lantern](../globals.md) / Quest

# Class: Quest

创建一个任务

## Constructors

### new Quest()

> **new Quest**(`id`, `title`, `body`, `condition`, `award`, `icon`?): [`Quest`](Quest.md)

#### Parameters

• **id**: `string`

• **title**: `string`

• **body**: `string`

• **condition**: [`QuestCondition`](../interfaces/QuestCondition.md)

• **award**: [`QuestAward`](../interfaces/QuestAward.md)

• **icon?**: `string`

#### Returns

[`Quest`](Quest.md)

#### Source

server/gameplay/quest.ts:145

## Properties

### \_body

> `protected` **\_body**: `string`

任务的描述

#### Source

server/gameplay/quest.ts:125

***

### \_title

> `protected` **\_title**: `string`

任务的标题

#### Source

server/gameplay/quest.ts:121

***

### award

> **award**: [`QuestAward`](../interfaces/QuestAward.md)

完成任务后的奖励

#### Todo

添加更多种类的奖励

#### Source

server/gameplay/quest.ts:135

***

### condition

> **condition**: [`QuestCondition`](../interfaces/QuestCondition.md)

完成任务的条件

#### Todo

添加更多完成条件

#### Source

server/gameplay/quest.ts:130

***

### form

> `private` **form**: `MessageFormData`

任务的表单

#### Source

server/gameplay/quest.ts:144

***

### icon?

> `optional` **icon**: `string`

任务的图标，值应该为资源包内的图片路径

#### Example

```ts
texture/gui/example_pic
```

#### Source

server/gameplay/quest.ts:140

***

### id

> `readonly` **id**: `string`

任务的Id

#### Source

server/gameplay/quest.ts:117

## Accessors

### body

> `get` **body**(): `string`

> `set` **body**(`content`): `void`

#### Parameters

• **content**: `string`

#### Returns

`string`

#### Source

server/gameplay/quest.ts:245

***

### title

> `get` **title**(): `string`

> `set` **title**(`content`): `void`

#### Parameters

• **content**: `string`

#### Returns

`string`

#### Source

server/gameplay/quest.ts:248

## Methods

### complete()

> **complete**(`player`): `void`

使一个玩家完成任务

#### Parameters

• **player**: `Player`

要完成任务的玩家

#### Returns

`void`

#### Source

server/gameplay/quest.ts:165

***

### display()

> **display**(`player`, `book`?): `void`

向玩家展示表单

#### Parameters

• **player**: `Player`

要被展示表单的玩家

• **book?**: [`QuestBook`](QuestBook.md)

如果指定，任务书将在关闭表单后展示给玩家

#### Returns

`void`

#### Source

server/gameplay/quest.ts:196

***

### initForm()

> **initForm**(`player`): `void`

初始化任务表单

#### Parameters

• **player**: `Player`

要被展示表单的玩家，表单的内容将随玩家自身是否完成任务而变化

#### Returns

`void`

#### Source

server/gameplay/quest.ts:172

***

### isCompleted()

> **isCompleted**(`player`): `boolean`

检查玩家是否完成了任务

#### Parameters

• **player**: `Player`

#### Returns

`boolean`

#### Source

server/gameplay/quest.ts:234
