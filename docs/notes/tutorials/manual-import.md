# 手动导入
有时Minecraft的自动导入可能出现资源缺失的问题，此时应尝试将模组手动导入至游戏目录内。

请注意，因为步骤繁琐，本文所述内容应在自动导入无效或出现问题时再尝试。

## Windows 10/11

1. 删除自动导入的模组文件（如果有）
2. 按 Win+R 打开运行
3. 在输入框内输入以下内容：`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`并点击确定
4. 使用任意解压缩工具打开下载好的`.mcaddon`文件
5. 使用解压缩工具将其中的`隐藏之年2(BP).mcpack`解压至第二步打开的目录的`development_behavior_packs`子目录下
6. 使用解压缩工具将其中的`隐藏之年2(RP).mcpack`解压至第二步打开的目录的`development_resource_packs`子目录下
7. 大功告成！

## Android

1. 删除自动导入的模组文件（如果有）
2. 将游戏的选项/存储/文件存储位置调整为`外部`
3. 使用文件管理器打开`Android/data/com.mojang.minecraftpe/files/games/com.mojang/`目录
4. 使用任意解压缩工具（一般文件管理器都具有此功能）打开下载好的`.mcaddon`文件
5. 使用解压缩工具将其中的`隐藏之年2(BP).mcpack`解压至第三步打开的目录的`development_behavior_packs`子目录下
6. 使用解压缩工具将其中的`隐藏之年2(RP).mcpack`解压至第三步打开的目录的`development_resource_packs`子目录下
7. 大功告成！
