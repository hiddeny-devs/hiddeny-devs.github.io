[**project-lantern**](../../../../../README.md) • **Docs**

***

[project-lantern](../../../../../globals.md) / [LanternAPI](../../../README.md) / [ArticleAPI](../README.md) / ArticleCollection

# Class: ArticleCollection

Create an article collection.
It likes [ChapterArticle](ChapterArticle.md), but support article unlock.

## Constructors

### new ArticleCollection()

> **new ArticleCollection**(`id`, `title`, `body`, `displayCondition`, `articles`): [`ArticleCollection`](ArticleCollection.md)

#### Parameters

• **id**: `string`

• **title**: `string` \| `RawMessage`

• **body**: `string` \| `RawMessage`

• **displayCondition**: [`DisplayCondition`](../interfaces/DisplayCondition.md)

• **articles**: ([`Article`](Article.md) \| [`ChapterArticle`](ChapterArticle.md))[]

#### Returns

[`ArticleCollection`](ArticleCollection.md)

#### Source

api/article.ts:95

## Properties

### articles

> **articles**: ([`Article`](Article.md) \| [`ChapterArticle`](ChapterArticle.md))[]

#### Source

api/article.ts:100

***

### body

> **body**: `string` \| `RawMessage`

#### Source

api/article.ts:98

***

### displayCondition

> **displayCondition**: [`DisplayCondition`](../interfaces/DisplayCondition.md)

#### Source

api/article.ts:99

***

### id

> **id**: `string`

#### Source

api/article.ts:96

***

### title

> **title**: `string` \| `RawMessage`

#### Source

api/article.ts:97

## Methods

### display()

> **display**(`player`): `void`

Display the reading to a player.

#### Parameters

• **player**: `Player`

#### Returns

`void`

#### Source

api/article.ts:107

***

### register()

> `protected` **register**(): `void`

Registry the article to game.

#### Returns

`void`

#### Source

api/article.ts:135
