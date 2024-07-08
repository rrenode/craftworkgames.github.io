---
id: animatedsprite
sidebar_label: AnimatedSprite
title: AnimatedSprite
description: An AnimatedSprite encapsulates a SpriteSheet with methods to set the current animation and control the playback. 
---

import AdventurerSpriteSheet from './adventurer.png'

In the [previous document](/docs/features/2d-animations/spritesheet/spritesheet) about `SpriteSheets` we went over how to create a `SpriteSheet`, define animations, and retrieve the animations from it.  Doing this only gives use the `SpriteSheetAnimation` instance for that animation, which we then have to create an `AnimationController` with to manage that single animation.

However, typically a `SpriteSheet` is going to contain several animations related to a single concept, like all of the animations for a player.  To better manage controlling the animations from the `SpriteSheet` we can use the `AnimatedSprite` class.

Let's use the same example adventurer character from the `SpriteSheet` document.

<figure>
    <img src={AdventurerSpriteSheet} style={{width: '100%', imageRendering: 'pixelated'}}/>
    <figcaption>
        <small>
            <a href="https://rvros.itch.io/animated-pixel-hero">Animated Pixel Adventurer</a> by <a href="https://rvros.itch.io/">rvros</a>; Licensed for free and commercial use.
        </small>
    </figcaption>
</figure>

## Creating an `AnimatedSprite`
To create an `AnimatedSprite` first a `SpriteSheet` needs to be created with the animations defined.  Building off of our previous example, it would look like this

```cs
protected override void LoadContent()
{
    Texture2D adventurerTexture = Content.Load<Texture2D>("adventurer");
    Texture2DAtlas atlas = new Texture2DAtlas("Atlas//adventurer", adventurerTexture);
    SpriteSheet spriteSheet = new SpriteSheet("SpriteSheet//adventurer", atlas);

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
}
```

This creates the `SpriteSheet`, defines the regions within the source `Texture2DAtlas` and then defines the animations within the `SpriteSheet`.  Now that we have this, we can create our `AnimatedSprite` by just giving it the `SpriteSheet`

```cs
private AnimatedSprite _adventurer;

protected override void LoadContent()
{
    //  previous code removed for brevity...

    _adventurer = new AnimatedSprite(spriteSheet);
    _adventurer.SetAnimation("idle");
}
```

And finally, don't forget to Update and Draw the `AnimatedSprite`

```cs
protected override void Update(GameTime gameTime)
{
    _adventurer.Update(gameTime);
}

protected override void Draw(GameTime gameTime)
{
    _graphics.Clear(Color.Black);

    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);
    _spriteBatch.Draw(_adventurer, Vector2.Zero);
    _spriteBatch.End();
}
```