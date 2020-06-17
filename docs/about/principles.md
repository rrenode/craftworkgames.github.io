---
id: principles
title: Principles
sidebar_label: Principles
---

`Extended` principles are to help you manifest an early [prototype](/docs/getting-started/prototypes) for your ideas of a game and evolve it into a working game without throwing away the prototype.
  
## Not opinionative

`Extended` is decoupled and cohered to solving problems related to game development. It is *not* an engine. It is *not* a framework. It is a set of utilities (in the form of libraries) with standards in terms of performance, usability, reliability, and ability to be supported. If you ask yourself, "What's the best way to solve this problem in general?", the answer is there isn't one. Each game will most likely have different constraints in terms of performance, scalability, and workflow.

## Not platform-independent

When possible, `Extended` code is similar across hardware, which shares similarities. It is *not* independent of the specifics of the given hardware. Those specifics, such as (but not limited to) different CPU cache sizes, different GPU capabilities, different amounts of CPU cores, all have an effect on the problem/solution space for you as a game developer. These factors can result in code for `Extended` to be hardware-specific in certain circumstances.

## Not future proof

`Extended` code is *not* anticipating the needs and wants of developers in the future tense. Instead, the focus is on the developers' needs and wants from time wasters and pain points in the present tense. As time goes on, these needs and wants will change, and so will `Extended`. In some cases, sufficient experience and data can justify anticipating something in the future. However, this is the exception, not the rule, and a healthy dose of skepticism in such circumstances is benevolent. This is because it is simply not possible to create solutions to problems which don't exist.

## Not replacing the expert

`Extended` helps game developers become experts; it is *not* replacing the need for experts. Every problem manifests from either a lack of time, value, or knowledge, or any combination thereof. `Extended` helps leverage your capabilities as a game developer by giving you free and open-source code through libraries, which save you time from writing the code yourself. However, this is nothing without sufficient documentation and knowledge sharing about how the code is useful or the story details of development of why and how a solution was derived. `Extended` aims to leverage your expertise so you can understand how to solve your game development problems and possibly contribute back in the spirit of [FOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software).
