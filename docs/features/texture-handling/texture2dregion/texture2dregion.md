---
id: texture2dregion
sidebar_label: Texture2DRegion
title: Texture2DRegion
description: A Texture2DRegion is a subregion of a texture. 
image: ./result.png
---

import PlayingCards from './cards.png'

A `Texture2DRegion` is a subregion of a texture, typically used for rendering sprites from a texture atlas or sprite sheet.  For instance, take the following image of playing cards.

<figure>
    <img src={PlayingCards} style={{width: '100%', imageRendering: 'pixelated'}} alt="Packed Texture of playing cards"/>
    <figcaption>
        <small>
            <a href="https://kenney.nl/assets/playing-cards-pack">Playing Cards Pack</a> by <a href="https://www.kenney.nl">Kenney</a>; Licensed under CreativeCommons Zero, CC0
        </small>
    </figcaption>
</figure>

In MonoGame, this would be loaded as a single `Texture2D` image, however we would want to define the individual boundaries within the image that represent each individual card. For instance, the top-left corner of the Ace of Hearts is at x:11 y:3 and has a width of 42px and a height of 60px.  So we can define the rectangular boundary of this card in the overall texture as `new Rectangle(11, 3, 42, 60)`

This is what a `Texture2DRegion` represents.  Internally it has a reference to the source `Texture2D` and defines the rectangular boundary that represents the sub region within the texture.

## Why Would We Use This
This is an excellent question.  When rendering textures with the `SpriteBatch` in MonoGame, every time you do a `SpriteBatch.Draw` call that uses a different `Texture2D` than the one before, the batcher has to do a process called **texture swapping**.  Excessive texture swapping can reduce draw performance in your game. 

By packing similar textures, like the cards, into a single image and then drawing only each region, we can draw the individual cards using a single source `Texture2D`, thus eliminating texture swapping as much as possible.

## Using a `Texture2DRegion`
To create a `Texture2DRegion` in MonoGame.Extended, you only need two things; a `Texture2D` and the rectangular boundary that defines the region.  Using our example of the Ace of Hearts from before, let's also create a `Texture2DRegion` for each of the other Ace cards as well:

```cs
private Texture2DRegion _aceOfHearts;
private Texture2DRegion _aceOfDiamonds;
private Texture2DRegion _aceOfClubs;
private Texture2DRegion _aceOfSpades;

protected override void LoadContent()
{
    Texture2D cardsTexture = Content.Load<Texture2D>("cards");

    //---------------------------------------------------------------------------------------------------------
    // Create a region for each ace card based on the rectangular boundary of the card within the source
    // texture.
    //---------------------------------------------------------------------------------------------------------
    _aceOfHearts = new Texture2DRegion(cardsTexture, 11, 3, 42, 60);
    _aceOfDiamonds = new Texture2DRegion(cardsTexture, 11, 68, 42, 60);
    _aceOfClubs = new Texture2DRegion(cardsTexture, 11, 133, 42, 60);
    _aceOfSpades = new Texture2DRegion(cardsTexture, 11, 198, 42, 60);
}
```

Then we can use the `SpriteBatch.Draw` extensions provided by MonoGame.Extended to draw the `Texture2DRegion` we created

```cs
protected override void Draw(GameTime gameTime)
{
    GraphicsDevice.Clear(Color.CornflourBlue);

    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

    //---------------------------------------------------------------------------------------------------------
    //  Draw the texture regions just like you would a normal Texture2D.  Since they are all using the same
    //  source texture, there is no texture swapping for each draw call.
    //---------------------------------------------------------------------------------------------------------
    _spriteBatch.Draw(_aceOfHearts, new Vector2(316, 270), Color.White);
    _spriteBatch.Draw(_aceOfDiamonds, new Vector2(358, 270), Color.White);
    _spriteBatch.Draw(_aceOfClubs, new Vector2(400, 270), Color.White);
    _spriteBatch.Draw(_aceOfSpades, new Vector2(442, 270), Color.White);

    _spriteBatch.End();
}
```

Which gives the following result

<figure>![Result of the code](./result.png)<br/><figcaption><small>Result of the code above drawing all four ace cards using texture regions.</small></figcaption></figure>

## Conclusion
In this article, we've discussed what a `Texture2DRegion` is in relation to a `Texture2D`, discussed the performance benefits of using them, and shown an example of creating them. In the next article we'll discuss using a `Texture2DAtlas` to manage a collection of regions for a single texture.