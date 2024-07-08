[**project-lantern**](../README.md) • **Docs**

***

[project-lantern](../globals.md) / QuestBook

# Class: QuestBook

创建一本任务书

## Constructors

### new QuestBook()

> **new QuestBook**(`id`, `title`, `body`, `quests`): [`QuestBook`](QuestBook.md)

#### Parameters

• **id**: `string`

• **title**: `string` \| `RawMessage`

• **body**: `string` \| `RawMessage`

• **quests**: [`Quest`](Quest.md)[]

#### Returns

[`QuestBook`](QuestBook.md)

#### Source

server/gameplay/quest.ts:37

## Properties

### body

> **body**: `string` \| `RawMessage`

任务书的描述

#### Source

server/gameplay/quest.ts:32

***

### id

> `readonly` **id**: `string`

任务书的Id

#### Source

server/gameplay/quest.ts:24

***

### quests

> `private` `readonly` **quests**: [`Quest`](Quest.md)[]

任务书的任务

#### Source

server/gameplay/quest.ts:36

***

### title

> **title**: `string` \| `RawMessage`

任务书的标题

#### Source

server/gameplay/quest.ts:28

## Methods

### addQuest()

> **addQuest**(`quest`, `message`?): `void`

添加一个任务

#### Parameters

• **quest**: [`Quest`](Quest.md)

要添加的任务

• **message?**: `string` \| `RawMessage`

添加完成后要向世界发送的消息

#### Returns

`void`

#### Source

server/gameplay/quest.ts:78

***

### display()

> **display**(`player`): `void`

向玩家展示任务书

#### Parameters

• **player**: `Player`

被展示的玩家

#### Returns

`void`

#### Source

server/gameplay/quest.ts:55

***

### getQuest()

> **getQuest**(`id`): [`Quest`](Quest.md)

根据Id获取任务

#### Parameters

• **id**: `string`

任务的Id

#### Returns

[`Quest`](Quest.md)

#### Source

server/gameplay/quest.ts:93

***

### getQuests()

> **getQuests**(): [`Quest`](Quest.md)[]

获取所有任务

#### Returns

[`Quest`](Quest.md)[]

#### Source

server/gameplay/quest.ts:99

***

### ~~register()~~

> **register**(): `void`

注册任务书

#### Returns

`void`

#### Deprecated

现在`constructor`方法已经包括物品的事件监听，无需再单独注册

#### Source

server/gameplay/quest.ts:106
