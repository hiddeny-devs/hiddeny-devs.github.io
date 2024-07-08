[**project-lantern**](README.md) • **Docs**

***

# project-lantern

This package add some useful functions for minecraft script API. 

Some features come from RawDiamondMC's [@sapi-utils](https://github.com/RawDiamondMC/sapi-utils),distributed under the original license(EPL-2.0)

## Example

```ts
please use this function to initialize your mod info:
~~~ts
import { initializeMod } from "hy2-toolchain";
initializeMod(YOUR_MOD_ID, YOUR_MOD_NAME);
~~~
```

## Classes

- [ChapterReading](classes/ChapterReading.md)
- [Job](classes/Job.md)
- [JobSkill](classes/JobSkill.md)
- [Quest](classes/Quest.md)
- [QuestBook](classes/QuestBook.md)
- [Reading](classes/Reading.md)
- [SimpleReading](classes/SimpleReading.md)
- [ToolItem](classes/ToolItem.md)
- [ToolTag](classes/ToolTag.md)
- [WeaponItem](classes/WeaponItem.md)
- [WeaponTag](classes/WeaponTag.md)
- [simpleReading](classes/simpleReading-1.md)

## Interfaces

- [ItemData](interfaces/ItemData.md)
- [QuestAward](interfaces/QuestAward.md)
- [QuestCondition](interfaces/QuestCondition.md)
- [jobOpinions](interfaces/jobOpinions.md)
- [skillOpinions](interfaces/skillOpinions.md)

## Variables

- [MOD\_ID](variables/MOD_ID.md)
- [MOD\_NAME](variables/MOD_NAME.md)
- [Nether](variables/Nether.md)
- [Overworld](variables/Overworld.md)
- [TheEnd](variables/TheEnd.md)
- [badEffects](variables/badEffects.md)
- [goodEffects](variables/goodEffects.md)

## Functions

- [addEffect](functions/addEffect.md)
- [affectEntities](functions/affectEntities.md)
- [clearEffect](functions/clearEffect.md)
- [clearSlot](functions/clearSlot.md)
- [consumeDurability](functions/consumeDurability.md)
- [damageEntities](functions/damageEntities.md)
- [getEquipmentItem](functions/getEquipmentItem.md)
- [getItemAmountInContainer](functions/getItemAmountInContainer.md)
- [getRandomChance](functions/getRandomChance.md)
- [giveItem](functions/giveItem.md)
- [initializeMod](functions/initializeMod.md)
- [modError](functions/modError.md)
- [modWarn](functions/modWarn.md)
- [postMessage](functions/postMessage.md)
- [rand](functions/rand.md)
- [sendWelcomeMessage](functions/sendWelcomeMessage.md)
- [setModId](functions/setModId.md)
- [setModName](functions/setModName.md)
