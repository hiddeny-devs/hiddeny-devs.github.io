[**project-lantern**](../../../README.md) • **Docs**

***

[project-lantern](../../../globals.md) / [utils](../README.md) / addEffect

# Function: addEffect()

> **addEffect**(`entity`, `effectType`, `duration`, `options`?): `void`

Wrapper function for adding effect(s) or effect group.

## Parameters

• **entity**: `Entity`

The entity to add effect.

• **effectType**: `string` \| `string`[] \| `EffectType` \| `EffectType`[]

the effect(s) to add.

• **duration**: `number`

Amount of time, in ticks, for the effect to apply.
There are 20 ticks per second. Use TicksPerSecond constant to convert between ticks and seconds.
The value must be within he range [0, 20000000].

• **options?**: `EntityEffectOptions`

Additional options for the effect.

## Returns

`void`

## Throws

This function can throw errors.

## Source

utils/entity.ts:62
