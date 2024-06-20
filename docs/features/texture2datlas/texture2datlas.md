---
id: texture2datlas
sidebar_label: Texture2DAtlas
title: Texture2DAtlas
description: A Texture2DAtlas is a 2D texture atlas that contains a collection of texture regions.
image: ./cards.png
---

In the [previous](../texture2dregion/texture2dregion.md) feature article we discussed what a `Texture2DRegion` is.  When you combine all the texture regions into a single collection, this is called a texture atlas. By using a texture atlas it gives us an easy way to create and manage our collection of regions

Let's take a look at the image of all the cards again.

<figure>![Packed Texture of playing cards](./cards.png)<br/><figcaption><small>[Playing Cards Pack](https://kenney.nl/assets/playing-cards-pack) by [Kenney](www.kenney.nl); Licensed under CreativeCommons Zero, CC0</small></figcaption></figure>

Let's recreate the texture regions we did in the previous article, but this time using a `Texture2DAtlas`.

## Using `Texture2DAtlas`
To create a `Texture2DAtlas` you only need a `Texture2D`

```cs
private Texture2DAtlas _atlas;
private Texture2DRegion _aceOfHearts;
private Texture2DRegion _aceOfDiamonds;
private Texture2DRegion _aceOfClubs;
private Texture2DRegion _aceOfSpades;

protected override void LoadContent()
{
    Texture2D cardsTexture = Content.Load<Texture2D>("cards");

    _atlas = new Texture2DAtlas(cardsTexture);
}
```

Now to create a new region we just have to use the `Texture2DAtlas.CreateRegion` method

```cs
_aceOfHearts = _atlas.CreateRegion(11, 3, 42, 60);
```
When you use the `Texture2DAtlas.CreateRegion` method, the region that is created is added to the atlas internally and returned back for you to use right away if you want.  If you don't need to reference it right away, that's fine, you can retrieve it from the atlas at a latter point by using the index of the region.  Regions are indexed in the atlas in the order they are added.

```cs
_atlas.CreateRegion(11, 68, 42, 60);
_atlas.CreateRegion(11, 133, 42, 60);
_aceOfDiamonds = _atlas[1];
_aceOfClubs = _atlas.GetRegion(2);
```

There is an additional overload for `Texture2DAtlas.CreateRegion` that allows you to specify a name for the region.  You can then use this name at a later time to retrieve the region instead of using the index value.

```cs
_atlas.CreateRegion(11, 198, 42, 60, "Ace of Spades");
_aceOfSpades = _atlas.GetRegion("Ace of Spades");
```

:::note
When you create a region, if you do not specify a name, it will automatically generate a name for the region in the format of `"{Textur2D.Name}({x}, {y}, {width}, {height})"`.  So in the instance of our cards, since the name of the image is `cards.png`, the Ace of Hearts would be generated as `"cards(11, 3, 42, 60)"`.
:::

:::caution
When naming a texture region, the name of each region added to the texture atlas must be unique.
:::

## Conclusion
We've now learned to use a `Texture2DAtlas` to create and retrieve the `Texture2DRegion` instances for our `Texture2D`.  Next, let's take a look at the `Sprite` class and how we can use the `Texture2DAtlas` to generate the sprites for us based on the regions.