---
id: tweening
title: Tweening
sidebar_label: Tweening
---

Tweening is the process of providing an animated image with multiple images per second, giving it a smoother image quality.
The word originally comes from the English word inbetweening which means something like stopping in between. 
`MonoGame.Extended.Tweening` enables you to smoothly transition properties of an object in the game world, such as position, size, or opacity.

## Usage

MonoGame.Extended.Tweenig is distributed via NuGet packages. You can add the NuGet package to your C# project through your IDE of choice (Visual Studio, Xamarin Studio, Rider, etc) or through the Command Line Interface (CLI) using the dotnet command.

```
Install-Package MonoGame.Extended.Tweening
```

We start by including the `Tweening` namespace.
```csharp
using MonoGame.Extended.Tweening;
```

Next, we declare a Player class whose `Position`
Property we are going to tween.
```csharp
class Player
{
    public Vector2 Position { get; set; }
}
```

Next, we instantiate an instance of the Tweener and Player class.
```csharp
private readonly Tweener _tweener = new Tweener();
private readonly Player _player = new Player() { Position = new Vector2(200, 50) };
```

Then we order the Tweener to tween the position.
The Tween method requires a target object and an expression that refers to a property of that object.
```csharp
_tweener.TweenTo(target: _player, expression: player => _player.Position, toValue: new Vector2(550, 50), duration: 2, delay: 1)
                .RepeatForever(repeatDelay: 0.2f)
                .AutoReverse()
                .Easing(EasingFunctions.Linear);
```

Next, we add the Tweener to the update loop
```csharp
protected override void Update(GameTime gameTime)
{
    _tweener.Update(gameTime.GetElapsedSeconds());
    base.Update(gameTime);
}
```

And last but not least we draw the Player
```csharp
protected override void Draw(GameTime gameTime)
{
    GraphicsDevice.Clear(Color.Black);
    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);
    _spriteBatch.FillRectangle(_player.Position.X, _player.Position.Y, Size.X, Size.Y, Color.Red);
    _spriteBatch.End();
    base.Draw(gameTime);
}
```

## Easing functions
`EasingFunctions` calculate the value of a property given a percentage of completeness.
In the example `EasingFunctions.Linear` was used. Below is a visual representation of the other `EasingFunctions`

### In-Easing functions
![In-Easing functions](inEasing.gif)

### Out-Easing functions
![Out-Easing functions](outEasing.gif)

### In-Out-Easing functions
![In-Out-Easing functions](inOutEasing.gif)