---
id: platforms
title: Platforms
sidebar_label: Platforms
---

## Supported Platforms & 3D APIs

`Extended` supports any platform `MonoGame` supports. The following is a table of platforms that are known to work and their supported graphics API backends with `MonoGame`. 

:::info
If you are writing your first game with `MonoGame`, it's highly recommended to only focus on desktop or mobile platforms. Almost all other platforms have NDAs which make the `MonoGame` code private to which a license is required. 
:::

Platform vs 3D API|OpenGL|DirectX|Metal|Vulkan|WebGPU
:---|:---:|:---:|:---:|:---:|:---:
Desktop Windows|:white_check_mark:|:white_check_mark:|:x:|:construction:|:x:
Desktop macOS|:white_check_mark:|:x:|:construction:|:x:|:x:
Desktop Linux|:white_check_mark:|:x:|:x:|:construction:|:x:
Mobile iOS|:white_check_mark:|:x:|:construction:|:x:|:x:
Mobile Android|:white_check_mark:|:x:|:x:|:construction:|:x:
Browser WebAssembly|:x:|:x:|:x:|:x:|:construction:
Micro-console tvOS|:x:|:x:|:construction:|:x:|:x:
Handheld-console PlayStation Vita|:white_check_mark:|:x:|:x:|:construction:|:x:
Handheld-console Nintendo Switch|:white_check_mark:|:x:|:x:|:construction:|:x:
Console Xbox One|:x:|:white_check_mark:|:x:|:x:|:x:
Console PlayStation 4|:white_check_mark:|:x:|:x:|:construction:|:x:
Cloud Google Stadia|:x:|:x:|:x:|:construction:|:x:

For more information see the MonoGame [documentation on target platforms](https://docs.monogame.net/articles/introduction/platforms.html).