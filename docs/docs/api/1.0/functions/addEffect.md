[**project-lantern**](../README.md) • **Docs**

***

[project-lantern](../globals.md) / addEffect

# Function: addEffect()

> **addEffect**(`entity`, `effectType`, `duration`, `options`?): `void`

为实体添加状态效果

## Parameters

• **entity**: `Entity`

要移除状态效果的实体

• **effectType**: `string` \| `EffectType`

要添加的状态效果，除了原版效果外还可填`bad`、`good`、`all`

• **duration**: `number`

效果持续的时长，单位为刻

• **options?**: `EntityEffectOptions`

## Returns

`void`

## Options

效果的其他选项

## Since

0.3.0

## Source

server/entity.ts:89
