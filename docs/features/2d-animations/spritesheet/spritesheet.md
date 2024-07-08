---
id: spritesheet
sidebar_label: Spritesheet
title: Spritesheet
description: A Spritesheet is a wrapper around a Texture2DAtlas with methods for defining frame based animations.
---

import AdventurerSpriteSheet from './adventurer.png'
import AdventurerAttackFrames from './attack-frames.png'

A `SpriteSheet` is a wrapper around a [Texture2DAtlas](/docs/features/texture-handling/texture2datlas/texture2datlas) that provides additional methods for defining frame based animations based on the regions within the `Texture2DAtlas`.  

Take a look at the following example texture atlas of an adventurer character.

<figure>
    <img src={AdventurerSpriteSheet} style={{width: '100%', imageRendering: 'pixelated'}}/>
    <figcaption>
        <small>
            <a href="https://rvros.itch.io/animated-pixel-hero">Animated Pixel Adventurer</a> by <a href="https://rvros.itch.io/">rvros</a>; Licensed for free and commercial use.
        </small>
    </figcaption>
</figure>

We can see that this texture atlas has 16 separate regions, some of which can be grouped together to form an animation.  For instance, the first 6 regions can be grouped together to form an attack animation

<figure>
    <img src={AdventurerAttackFrames} style={{width: '100%', imageRendering: 'pixelated'}}/>
    <figcaption>
        <small>
            <a href="https://rvros.itch.io/animated-pixel-hero">Animated Pixel Adventurer</a> by <a href="https://rvros.itch.io/">rvros</a>; Licensed for free and commercial use.
        </small>
    </figcaption>
</figure>

Knowing the regions that represent our frames of animation, we can use a `SpriteSheet` to define the animations.

## Using `SpriteSheet`
To create a `SpriteSheet` you first need to create a [Texture2DAtlas](/docs/features/texture-handling/texture2datlas/texture2datlas), then you use that in the constructor to create the `SpriteSheet`.

```cs
private SpriteSheet _spriteSheet;

protected override void LoadContent()
{
    Texture2D adventurerTexture = Content.Load<Texture2D>("adventurer");
    Texture2DAtlas atlas = new Texture2DAtlas("Atlas//adventurer", adventurerTexture);
    _spriteSheet = new SpriteSheet("SpriteSheet//adventurer", atlas);
}
```

Now that we have the `SpriteSheet` created, we need to define the regions in the source `TextureAtlas` that make up the different frames of animation.  We can use the `CreateRegion(int, int, int, int, string)` overload to provide a name for each animation frame

```cs
//  Attack frames
_spriteSheet.TextureAtlas.CreateRegion(0, 0, 50, 37, "attack-00");
_spriteSheet.TextureAtlas.CreateRegion(50, 0, 50, 37, "attack-01");
_spriteSheet.TextureAtlas.CreateRegion(100, 0, 50, 37, "attack-02");
_spriteSheet.TextureAtlas.CreateRegion(150, 0, 50, 37, "attack-03");
_spriteSheet.TextureAtlas.CreateRegion(200, 0, 50, 37, "attack-04");
_spriteSheet.TextureAtlas.CreateRegion(0, 37, 50, 37, "attack-05");

//  idle frames
_spriteSheet.TextureAtlas.CreateRegion(50, 37, 50, 37, "idle-00");
_spriteSheet.TextureAtlas.CreateRegion(100, 37, 50, 37, "idle-01");
_spriteSheet.TextureAtlas.CreateRegion(150, 37, 50, 37, "idle-02");
_spriteSheet.TextureAtlas.CreateRegion(200, 37, 50, 37, "idle-03");

// run frames
_spriteSheet.TextureAtlas.CreateRegion(0, 74, 50, 37, "run-00");
_spriteSheet.TextureAtlas.CreateRegion(50, 74, 50, 37, "run-01");
_spriteSheet.TextureAtlas.CreateRegion(100, 74, 50, 37, "run-02");
_spriteSheet.TextureAtlas.CreateRegion(150, 74, 50, 37, "run-03");
_spriteSheet.TextureAtlas.CreateRegion(200, 74, 50, 37, "run-04");
_spriteSheet.TextureAtlas.CreateRegion(0, 111, 50, 37, "run-05");
```

Once we have the regions defined that represent each frame of animation, we can then create the definitions for each animation by using the `DefineAnimation(string, Action<SpriteSheetAnimationBuilder>)` method

```cs
//  Define the attack animation
_spriteSheet.DefineAnimation("attack", builder =>
{
    builder.IsLooping(true)
           .AddFrame("attack-00", TimeSpan.FromSeconds(0.1))
           .AddFrame("attack-01", TimeSpan.FromSeconds(0.1))
           .AddFrame("attack-02", TimeSpan.FromSeconds(0.1))
           .AddFrame("attack-03", TimeSpan.FromSeconds(0.1))
           .AddFrame("attack-04", TimeSpan.FromSeconds(0.1))
           .AddFrame("attack-05", TimeSpan.FromSeconds(0.1));
});

//  Define the idle animation
_spriteSheet.DefineAnimation("idle", builder =>
{
    builder.IsLooping(true)
           .AddFrame("idle-00", TimeSpan.FromSeconds(0.1))
           .AddFrame("idle-01", TimeSpan.FromSeconds(0.1))
           .AddFrame("idle-02", TimeSpan.FromSeconds(0.1))
           .AddFrame("idle-03", TimeSpan.FromSeconds(0.1));
});

//  Define the run animation
_spriteSheet.DefineAnimation("run", builder =>
{
    builder.IsLooping(true)
           .AddFrame("run-00", TimeSpan.FromSeconds(0.1))
           .AddFrame("run-01", TimeSpan.FromSeconds(0.1))
           .AddFrame("run-02", TimeSpan.FromSeconds(0.1))
           .AddFrame("run-03", TimeSpan.FromSeconds(0.1))
           .AddFrame("run-04", TimeSpan.FromSeconds(0.1))
           .AddFrame("run-05", TimeSpan.FromSeconds(0.1));
});
```

:::caution
When giving the name for an animation definition, the name must be unique across all animations defined in a single `SpriteSheet`.
:::

## Getting An Animation
Once you have defined the animations in the `SpriteSheet`, you can retrieve them by using the name you gave them when defining them.  This will give you an instance of `SpriteSheetAnimation` which is an implementation of the `IAnimation` interface

```cs
protected override void LoadContent()
{
    //  previous code removed for brevity ...

    SpriteSheetAnimation idleAnimation = _spriteSheet.GetAnimation("idle");
}
```

You can then use this animation with the `AnimationController` class to control the animation including play, pause, reset, stop, and updating it each frame.

```cs
private AnimationController _idleAnimationController;

protected override void LoadContent()
{
    //  previous code removed for brevity...

    SpriteSheetAnimation idleAnimation = _spriteSheet.GetAnimation("idle");
    _idleAnimationController = new AnimationController(idleAnimation);
}
```

The `AnimationController` has a `CurrentFrame` property you can use to get the region index of the current frame of the animation.  You can use this to know which `Texture2DRegion` from the source `Texture2DAtlas` of the `SpriteSheet` to draw

```cs
Texture2DRegion currentFrameTexture = _spriteSheet.TextureAtlas[_idleAnimationController.CurrentFrame];
```

## Conclusion
We have now learned how to create a new `SpriteSheet` based on a `Texture2DAtlas`, define animations within the `SpriteSheet`, then retrieve the animations and use them with an `AnimationController`.  However, creating a controller for each possible animation can be tedious and a nightmare to maintain.  In the next document, we'll discuss the `AnimatedSprite` class which provides a convenient encapsulation of the `SpriteSheet` where we can set what animation we want to play.
