[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ArticleAPI](../README.md) / Article

# Class: Article

Create an article.

## Extended by

- [`ChapterArticle`](ChapterArticle.md)

## Constructors

### new Article()

> **new Article**(`id`, `title`, `body`, `iconPath`?, `needUnlock`?): [`Article`](Article.md)

#### Parameters

• **id**: `string`

• **title**: `string` \| `RawMessage`

• **body**: `string` \| `RawMessage`

• **iconPath?**: `string`

• **needUnlock?**: `boolean`= `true`

#### Returns

[`Article`](Article.md)

#### Source

api/article.ts:8

## Properties

### body

> **body**: `string` \| `RawMessage`

#### Source

api/article.ts:11

***

### iconPath?

> `optional` **iconPath**: `string`

#### Source

api/article.ts:12

***

### id

> **id**: `string`

#### Source

api/article.ts:9

***

### needUnlock

> **needUnlock**: `boolean` = `true`

#### Source

api/article.ts:13

***

### title

> **title**: `string` \| `RawMessage`

#### Source

api/article.ts:10

## Methods

### checkUnlock()

> **checkUnlock**(`player`): `boolean`

Check the article whether it is unlocked or not to article collection.

#### Parameters

• **player**: `Player`

#### Returns

`boolean`

#### Source

api/article.ts:44

***

### display()

> **display**(`player`): `void`

Display the reading to a player.

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

api/article.ts:20

***

### register()

> `protected` **register**(): `void`

Registry the article to game.

#### Returns

`void`

#### Source

api/article.ts:28

***

### unlock()

> **unlock**(`player`): `void`

Unlock the article to article collection.

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

api/article.ts:37
