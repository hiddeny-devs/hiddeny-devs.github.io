[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ArticleAPI](../README.md) / ChapterArticle

# Class: ChapterArticle

Create an article with chapters.

## Extends

- [`Article`](Article.md)

## Constructors

### new ChapterArticle()

> **new ChapterArticle**(`id`, `title`, `body`, `chapters`, `iconPath`?, `needUnlock`?): [`ChapterArticle`](ChapterArticle.md)

#### Parameters

• **id**: `string`

• **title**: `string` \| `RawMessage`

• **body**: `string` \| `RawMessage`

• **chapters**: [`ChapterData`](../interfaces/ChapterData.md)[]

• **iconPath?**: `string`

• **needUnlock?**: `boolean`= `true`

#### Returns

[`ChapterArticle`](ChapterArticle.md)

#### Overrides

[`Article`](Article.md).[`constructor`](Article.md#constructors)

#### Source

api/article.ts:57

## Properties

### body

> **body**: `string` \| `RawMessage`

#### Inherited from

[`Article`](Article.md).[`body`](Article.md#body)

#### Source

api/article.ts:60

***

### chapters

> **chapters**: [`ChapterData`](../interfaces/ChapterData.md)[]

#### Source

api/article.ts:61

***

### iconPath?

> `optional` **iconPath**: `string`

#### Inherited from

[`Article`](Article.md).[`iconPath`](Article.md#iconpath)

#### Source

api/article.ts:62

***

### id

> **id**: `string`

#### Inherited from

[`Article`](Article.md).[`id`](Article.md#id)

#### Source

api/article.ts:58

***

### needUnlock

> **needUnlock**: `boolean` = `true`

#### Inherited from

[`Article`](Article.md).[`needUnlock`](Article.md#needunlock)

#### Source

api/article.ts:63

***

### title

> **title**: `string` \| `RawMessage`

#### Inherited from

[`Article`](Article.md).[`title`](Article.md#title)

#### Source

api/article.ts:59

## Methods

### checkUnlock()

> **checkUnlock**(`player`): `boolean`

Check the article whether it is unlocked or not to article collection.

#### Parameters

• **player**: `Player`

#### Returns

`boolean`

#### Inherited from

[`Article`](Article.md).[`checkUnlock`](Article.md#checkunlock)

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

#### Overrides

[`Article`](Article.md).[`display`](Article.md#display)

#### Source

api/article.ts:71

***

### register()

> `protected` **register**(): `void`

Registry the article to game.

#### Returns

`void`

#### Inherited from

[`Article`](Article.md).[`register`](Article.md#register)

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

#### Inherited from

[`Article`](Article.md).[`unlock`](Article.md#unlock)

#### Source

api/article.ts:37
