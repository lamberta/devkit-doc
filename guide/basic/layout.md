# UI Layout

When building game UI in timestep, we want to be able to
layout views that flow without concern for the screen dpi,
aspect ratio, or resolution.

The first step to building UI is setting up the
viewport. This is non-trivial because the viewport needs to
work on multiple screen sizes. There are a few options for
configuring your viewport.

## Aspect ratio

The ratio between the width and the height of a screen
resolution is called the aspect ratio. The aspect ratio is
important because a UI designed for one screen resolution
trivially scales to fit any screen resolution with the same
aspect ratio. By trivially we mean that it fills the screen
entirely without clipping any content.

[diagram of a screen stretching to fit a matching aspect ratio]

[diagram of a screen stretching to a different aspect ratio]

Because two different screen resolutions can have the same
aspect ratio, we refer to the aspect ratio as the smallest
integer fraction that represents the ratio. For example, the
squares 100 x 100 and 200 x 200 have the same aspect ratio, 1:1,
while the HD 1080p resolution of 1900 x 1200 has the aspect
ratio 16:9, which is the same as the iPhone 5 at 1136 x 640.

## Stretch to fit

It's fairly easy to design for a fixed aspect ratio. For
example, designing for a resolution 1024 x 576 (aspect ratio
16 x 9) means your content will easily fit any 16:9
screen. There are three ways to scale the fixed aspect ratio
to screens of other ratios:

1. *Cover*: the notion of covering a screen means that all
   available regions of the screen are used to display a game
   (no black bars). We don't want to squish or stretch the
   screen, so we scale the screen to fill all the pixels and
   clip anything that expands beyond the screen boundaries. In
   common usage, it's ok to clip background images, but you
   must move important UI elements to be within the visible
   regions of the clipped region.

[diagram of an image that's stretched and squished]

[diagram of a covered screen showing clipping]

   An example where cover makes a lot of sense is an isometric
   simulation game. Here, having different aspect ratios simply
   means that users can see more or less of the game map. In
   competitive multiplayer games, however, this may lend itself
   to a competitive advantage, in which case another scaling
   method might make more sense.

2. *Contain*: the notion of containing a screen means that all
   pixels in the original design are visible. We scale the
   screen as large as we can without clipping any pixels. When
   the aspect ratios are not equivalent, this leads to bars on
   the side. We can ignore these, resulting in black bars, or
   fill them with some repeating pattern or texture.

[diagram of a contained screen showing black bars]

3. *Hybrid*: advanced game designers may implement a combination
   of covering and clipping. Usually, this is done by prefering
   cover over contain, choosing a maximum amount of clipping
   that is allowed for cover. If covering would result in
   clipping that exceeds a certain threshold, the UI is clipped
   to the maximum clip threshold and then placed on the screen
   using the contain algorithm.

## Automatic Positioning of Subviews

Each view in timestep can contain subviews. For many game
screens, the game logic determines exactly where each
subview is: an army marching across a field might represent
each army unit as a subview and a controller class would set
each subview position based on an underlying data model. A
UI composed of several buttons or input fields, however, can
quickly become tedious to layout by hand. Timestep ships
with several classes that handle view layout automatically.

## Linear Layout

One of the most common representations of a layout is a
line. This encapsulates everything from a high-level
structural layout such as a header, body, and footer
(vertical line) to a more detailed layout such as a list of
buttons in a toolbar (horizontal line). Linear layouts can
be easily nested to build more complex UI.

The `LinearLayout` class makes configuration of linear lists
of views very easy. To change the layout of a view, set the
layout property of a view:

Programatically:

~~~
import ui.View as View;

var parent = new View({layout: 'linear', direction: 'vertical'}),
    view0 = new View({superview: parent, backgroundColor: 'red'}),
    view1 = new View({superview: parent, backgroundColor: 'blue', flex: 1}),
    view2 = new View({superview: parent, backgroundColor: 'green'});
~~~

Or using JSON:

~~~
var MainView = Class(View, function (supr) {
  this._def = {
    layout: 'linear',
    children: [
      {backgroundColor: 'red'},
      {backgroundColor: 'blue'}
    ]
  };
});
~~~

## Layout Order

Views in timestep are ordered by `zIndex` first. If the
zIndex values are the same, the views are sorted in the
order in which they were added, with later views appearing
last.

Sometimes, you need to layout views in a different order
than the underlying sort order. For example, in the classic
vertical layout of a fixed header and a scrolling body, the
header may contain a drop shadow that the body should scroll
under. The header needs to be above the body in the `zIndex`
order, but it needs to be first in the layout order.
To specify an alternative sorting, set the order property to
an integer. Higher order values will be later in the
layout. The order defaults to 0.

## Sizing the containing view to fit

(Need to call `view.layout.setSizeContainerToFit(true);`).

**TODO**: add this to the layout style properties.

## Padding

A view in a layout can specify padding using the style
properties `'top'`, `'left'`, `'bottom'`, and `'right'`.

## Flex

A view in a layout can specify a dynamic resize attribute
`hflex` or `vflex`. This can only be used if the containing
view has a fixed dimension (the layout does not have
`sizeContainerToFit` set to true).

A view with `hflex` will expand to fit the available size. It
will not shrink below its `minWidth`, if one is set. The same
applies for `vflex` and `minHeight`.

## Justify Content

If, after laying out all subviews, there is space left over,
you can choose to distribute that space between the views in
different ways. Set the `justifyContent` property of a view to
one of the following:

* `start`: the default value, this does what you would expect for the default behavior - views are laid out in order from the start and all space is left at the end of the line.
* `end`: The extra space is pushed to the front of the line.
* `center`: The space is distributed between the start and end of the line. This effectively centers the subviews!
* `space`: Space is distributed evenly between all gaps in subviews.
* `space-outside`: Space is distributed evenly between all gaps in subviews as well as at the start and end of the line.

[diagram of justifyContent]

## Box Layout

The Box Layout class does not control the layout of
subviews. Rather, it adds properties to a view's style for
easier control over the view's position.

* `centerX`, `centerY`: centers a view within the parent view

[diagram of a centered view]

* `top`, `left`, `right`, `bottom`: specifies the distance
  from the corresponding edge of the parent view. The layout
  computes (and overwrites) values for width, height, x, and
  y based on these properties. Automatically updates when
  the parent view resizes.

    * If both top and bottom are provided, effectively
      stretches the view when the parent view size changes
      (similarly if both left and right are provided)

[diagram of a stretched view]

* `widthPercent`, `heightPercent`: computes (and overwrites)
  the view's width (height) properties as a percentage of
  the parent view's width (height). Automatically updates
  when the parent view resizes.

[diagram of a view with dimensions set as percentages of parent]

## Common Layouts

### Header and footer with scrolling body

### List of Lists

## Widgets

### ListView

### ButtonView

### ImageView

### SpriteView
