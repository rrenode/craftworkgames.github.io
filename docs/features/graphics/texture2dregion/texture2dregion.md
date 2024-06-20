---
id: texture2dregion
title: Texture2DRegion
sidebar_label: Texture2DRegion
---

A `Texture2DRegion` is a subregion of a texture, typically used for rendering sprites from a texture atlas or sprite sheet.  For instance, take the following image of playing cards.

![Packed Texture of playing cards](./cardsLarge_tilemap.png)
<sub><a href="https://kenney.nl/assets/playing-cards-pack">Playng Cards Pack</a> by <a href="www.kenney.nl">Kenney</a>; Licensed under Creative Commons Zero, CC0 </sub>

In MonoGame, this would be loaded as a single `Texture2D` image, however we would want to define the individual boundaries within the image that represent each individual card. For instance, the top-left corner of the Ace of Hearts is at x:11 y:3 and has a width of 42px and a height of 60px.  So we can define the rectangular boundary of this card in the overall texture as `new Rectangle(11, 3, 42, 60)`

This is what a `Texture2DRegion` represents.  Internally it has a reference to the source `Texture2D` and defines the rectangular boundary that represents the sub region within the texture.

## Why Would We Use This
This is an excellent question.  When rendering textures with the `SpriteBatch` in MonoGame, every time you do a `SpriteBatch.Draw` call that uses a different `Texture2D` than the one before, the batcher has to do a process called **texture swapping**.  Excessive texture swapping can reduce draw performance in your game. 

By packing similar textures, like the cards, into a single image and then drawing only each region, we can draw the individual cards using a single source `Texture2D`, thus eliminating texture swapping as much as possible.

## Using a `Texture2DRegion`
To create a `Texture2DRegion` in MonoGame.Extended, you only need two things; a `Texture2D` and the rectangular boundary that defines the region.  Using our example of hte Ace of Hearts from before, we could create a `Texture2DRegion` of it like this

```csharp
private Texture2DRegion _aceOfHearts;

protected override void LoadContent()
{
    Texture2D texture = Content.Load<Texture2D>("cards");
    _aceOfHearts = new TextureRegion(texture, 11, 3, 42, 60);
}
```

Then we can use the `SpriteBatch.Draw` extensions provided by MonoGame.Extended to draw the `Texture2DRegion` we created

```csharp
protected override void Draw(GameTime gameTime)
{
    GraphicsDevice.Clear(Color.CornflourBlue);

    _spriteBatch.Begin();
    _spriteBatch.Draw(_aceOfHearts, Vector2.Zero, Color.White);
    _spriteBatch.End();
}
```