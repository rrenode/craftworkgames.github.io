---
id: tiled
title: Tiled
sidebar_label: Tiled
---

[![Tiled Logo](tiled-logo.png)](https://www.mapeditor.org/)
# Tiled
The `MonoGame.Extended.Tiled` library loads and renders maps created with the popular [Tiled Map Editor](http://www.mapeditor.org/).

Tiled is an [open sourced](https://github.com/bjorn/tiled) general purpose tile map editor for all tile-based games, such as RPGs, platformers or Breakout clones. Tiled lets you easily design and view tile maps, and through the `Monogame.Extended.Tiled` package, you can load and display a map generated with Tiled in MonoGame

# Using the TiledMap in your game

The Tiled Assets used in the documentation can be downloaded [Here](./assets.zip)

## Installation
To load a TiledMap into your project, you first need to add it to your `ContentManager`, and in order to compile the tile map for use in `MonoGame` you must add a reference to the pipeline tool.
Instructions to do so can be found [Here](/docs/getting-started/installation)

[MonoGame.Extended.Tiled](https://www.nuget.org/packages/MonoGame.Extended.Tiled/) is distributed via NuGet packages. You can add the NuGet package to your C# project through your IDE of choice (Visual Studio, Xamarin Studio, Rider, etc) or through the Command Line Interface (CLI) using the dotnet command.
```
Install-Package MonoGame.Extended.Tiled
```

## Usage

We start by including the `Tiled` namespaces.
```csharp
using MonoGame.Extended.Tiled;
using MonoGame.Extended.Tiled.Renderers;
```
Next we define our `Tiledmap` and `TiledMapRenderer`
```csharp
private TiledMap _tiledMap;
private TiledMapRenderer _tiledMapRenderer;
```

Which we then initalize in the LoadContent function.
```csharp
protected override void LoadContent()
{
    _tiledMap = Content.Load<TiledMap>("samplemap");
    _tiledMapRenderer = new TiledMapRenderer(GraphicsDevice, _tiledMap);

    _spriteBatch = new SpriteBatch(GraphicsDevice);
}
```

To finally render and tick the map, we call `mapRenderer.Update();` and `mapRenderer.Draw();` in their respective methods.

```csharp
protected override void Update(GameTime gameTime)
{
    _tiledMapRenderer.Update(gameTime);
    base.Update(gameTime);
}
```

```c#
protected override void Draw(GameTime gameTime)
{
    // Clear the screen
    GraphicsDevice.Clear(Color.Black);

    // Setting the sampler state to `SamplerState.PointClamp` is recommended to remove gaps between the tiles when rendering
    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);
    
    _tiledMapRenderer.Draw();

    _spriteBatch.End();

    base.Draw(gameTime);
}
```

## Adding a Camera

The game now renders the `TiledMap`. The next step is to move through the map with a `Camera`.

We start by including the `Camera` namespaces.
```csharp
using MonoGame.Extended;
using MonoGame.Extended.ViewportAdapters;
```

Next we define our Camera

```csharp
private OrthographicCamera _camera;
```

Which we then initalize in the Initialize function.

```csharp
protected override void Initialize()
{
    base.Initialize();
    var viewportadapter = new BoxingViewportAdapter(Window, GraphicsDevice, 800, 600);
    _camera = new OrthographicCamera(viewportadapter);
}
```

We need to tell the Camera where to look. To do this, we declare the following field.

```csharp
private Vector2 _cameraPosition;
```

We update this field with the following function

```csharp
private void MoveCamera(GameTime gameTime)
{
    float speed = 200 * gameTime.GetElapsedSeconds();
    var state = Keyboard.GetState();
    if (state.IsKeyDown(Keys.Up))
        _cameraPosition.Y -= speed;
    if (state.IsKeyDown(Keys.Right))
        _cameraPosition.X += speed;
    if (state.IsKeyDown(Keys.Down))
        _cameraPosition.Y += speed;
    if (state.IsKeyDown(Keys.Left))
        _cameraPosition.X -= speed;
}
```

Which we then use in the `Update` function
```csharp
protected override void Update(GameTime gameTime)
{
    _tiledMapRenderer.Update(gameTime);

    MoveCamera(gameTime);
    _camera.LookAt(_cameraPosition);

    base.Update(gameTime);
}
```

To render the map with our `Camera`, we call the Draw function with the Camera's ViewMatrix as follows.

```c#
protected override void Draw(GameTime gameTime)
{
    // Clear the screen
    GraphicsDevice.Clear(Color.Black);

    // Setting the sampler state to `SamplerState.PointClamp` is recommended to remove gaps between the tiles when rendering
    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);
    
    _tiledMapRenderer.Draw(_camera.GetViewMatrix());

    _spriteBatch.End();

    base.Draw(gameTime);
}
```
