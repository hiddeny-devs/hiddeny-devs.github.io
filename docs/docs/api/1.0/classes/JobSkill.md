[**project-lantern**](../README.md) • **Docs**

***

[project-lantern](../globals.md) / JobSkill

# Class: JobSkill

职业技能

## Constructors

### new JobSkill()

> **new JobSkill**(`namespace`, `id`, `typeId`, `opinions`): [`JobSkill`](JobSkill.md)

#### Parameters

• **namespace**: `string`

• **id**: `string`

• **typeId**: `string`

• **opinions**: [`skillOpinions`](../interfaces/skillOpinions.md)

#### Returns

[`JobSkill`](JobSkill.md)

#### Source

server/gameplay/job.ts:138

## Properties

### id

> `readonly` **id**: `string`

技能的Id

#### Source

server/gameplay/job.ts:122

***

### namespace

> `readonly` **namespace**: `string`

技能的命名空间

#### Source

server/gameplay/job.ts:118

***

### opinions

> **opinions**: [`skillOpinions`](../interfaces/skillOpinions.md)

#### Source

server/gameplay/job.ts:127

***

### typeId

> `readonly` **typeId**: `string`

技能的物品Id

#### Source

server/gameplay/job.ts:126

## Methods

### giveSkill()

> **giveSkill**(`player`): `void`

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

server/gameplay/job.ts:131

***

### hasSkill()

> **hasSkill**(`player`): `boolean`

#### Parameters

• **player**: `Player`

#### Returns

`boolean`

#### Source

server/gameplay/job.ts:128
