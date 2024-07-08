[**project-lantern**](../../../README.md) • **Docs**

***

[project-lantern](../../../globals.md) / [utils](../README.md) / replaceItemStack

# Function: replaceItemStack()

> **replaceItemStack**(`item`, `newItem`, `container`): `number`

Replace ItemStack in a Container

## Parameters

• **item**: `undefined` \| `string` \| `ItemStack`

The ItemStack or ItemStack.typeId to be replaced.
if it's undefined, every empty slot will be filled.

• **newItem**: `undefined` \| `string` \| `ItemStack`

the new ItemStack.
if it's undefined, the matched slot will be cleared.

• **container**: `Container`

the Container which will be searched.

## Returns

`number`

## Source

utils/item.ts:19
