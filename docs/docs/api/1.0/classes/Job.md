[**project-lantern**](../README.md) • **Docs**

***

[project-lantern](../globals.md) / Job

# Class: Job

职业

## Constructors

### new Job()

> **new Job**(`namespace`, `id`, `typeId`, `name`, `skills`, `opinions`): [`Job`](Job.md)

#### Parameters

• **namespace**: `string`

• **id**: `string`

• **typeId**: `string`

• **name**: `string` \| `RawMessage`

• **skills**: [`JobSkill`](JobSkill.md)[]

• **opinions**: [`jobOpinions`](../interfaces/jobOpinions.md)

#### Returns

[`Job`](Job.md)

#### Source

server/gameplay/job.ts:36

## Properties

### id

> `readonly` **id**: `string`

职业的Id

#### Source

server/gameplay/job.ts:16

***

### name

> `readonly` **name**: `string` \| `RawMessage`

#### Source

server/gameplay/job.ts:21

***

### namespace

> `readonly` **namespace**: `string`

职业的命名空间

#### Source

server/gameplay/job.ts:12

***

### opinions

> **opinions**: [`jobOpinions`](../interfaces/jobOpinions.md)

职业的属性

#### Source

server/gameplay/job.ts:25

***

### skills

> **skills**: [`JobSkill`](JobSkill.md)[]

#### Source

server/gameplay/job.ts:35

***

### typeId

> `readonly` **typeId**: `string`

职业的物品Id

#### Source

server/gameplay/job.ts:20

## Methods

### giveJob()

> **giveJob**(`player`): `void`

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

server/gameplay/job.ts:29

***

### hasJob()

> **hasJob**(`player`): `boolean`

#### Parameters

• **player**: `Player`

#### Returns

`boolean`

#### Source

server/gameplay/job.ts:26
