# ui.widget.TabView

## Class: ui.widget.TabView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.TabView as TabView;
~~~

### new TabView ([options])
1. `options {object}`
	* `buttonOpts {Object}` ---Optional button settings, [see below](#).
	* `contentOpts {Object}` ---Options passed to the constructor of the internal content view.
	* `tabPosition {TabView.tabPosition}` ---Options: `'TOP'`, `'RIGHT'`, `'BOTTOM'` or `'LEFT'` ---Optional

~~~
var tabview = new TabView();
~~~

### tabview.addPane (button, child)
1. `button {string|ui.View}`
2. `child {ui.View}`
3. Return: `{ui.widget.TabPane}`

If the first argument is a string then the tab pane will
create an instance of `TabButton` and use the string
value as title. The child is the view with the content. This
view will be placed in another view, the tab pane sizes this
view to the available size within the tab pane and controls
the visibility of this view with the pane select function.

The folowing example shows how to create a basic tab pane
with two pages. The tab buttons will be placed at the top
and the buttons will take the size of the text with a
padding of ten pixels. It uses the default grey colors.

~~~
var tabs = new TabView({superview: this, x: 10, y: 10, width: 300, height: 200});

tabs.addPane("Game", new TextView({
  text: "This a tab pane",
  layout: "box",
  layoutWidth: "100%",
  layoutHeight: "100%"
}));

tabs.addPane("Closure", new TextView({
  text: "This is another pane",
  layout: "box",
  layoutWidth: "100%",
  layoutHeight: "100%"
}));
~~~

### tabview.setTabPosition (position)
1. `position {TabView.tabPosition}` ---Values: `'TOP'`, `'RIGHT'`, `'BOTTOM'` or `'LEFT'`.

Change the position of the tab buttons.

### tabview.updateButtonOpts (options)
1. `options {object}`
	* `tabSize {TabPaneView.tabSize}` ---Options: `'AUTO'`, `'FIXED'` or `'FLEX'`.
	* `padding {number|array}`
	* `fixedWidth {number}`
	* `image {string|ui.resource.Image}`
	* `activeImage {string}`
	* `scaleMethod {string}` see: [ui.images](./ui-images.html)
	* `sourceSlices {Object}` see: [ui.images](./ui-images.html)
	* `destSlices {Object}` see: [ui.images](./ui-images.html)
	* `color {string} = "#B0B0B0"` the default is applied in the TabPaneButton class
	* `activeColor {string} = "#000000"`  the default is applied in the TabPaneButton class
	* `backgroundColor {string} = "#E0E0E0"` the default is applied in the TabPaneButton class
	* `activeBackgroundColor {string} = "#D0D0D0"` the default is applied in the TabPaneButton class
	* `horizontalAlign {string}` `"left"`, `"right"`, `"center"` or `"justify"`
	* `verticalAlign {string}` `"top"`, `"middle"` or `"bottom"`

Control the styling of the tab buttons. All listed options
are optional however some options work together like `tabSize`
and `fixedWidth`, `image` and `activeImage`.


### Events

#### \'HidePane\', callback (tabPane)
1. `tabPane {ui.widget.TabPane}`

This event is called when the current tab is hidden.

#### \'ShowPane\', callback (tabPane)
1. `tabPane {ui.widget.TabPane}`

This event is called after a tab is selected and made visible.


## Class: TabPane

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

~~~
var tabpane = tabs.addPane("newtab", myview);
~~~

### tabpane.remove ()

Remove the given tab pane from the tab pane view.

### tabpane.select ()

Select the given tab pane.

### tabpane.getContentView ()
1. Return: `{Object}`

This function returns a `View`, or a subclass of `View`,
which is the content of the pane.

### tabpane.getButtonView ()
1. Return: `{Object}`

This function returns the `View` of the button, the default type is `TabButton`.


## Class: ui.widget.TabButton

When the first argument of `TabView.addPane` is a string
then an instance of `TabButton` as created for the button,
this class is mainly for internal use in the `TabPane` but
can be subclassed.

If it's necessary to create a unique style for each button
in the tab pane then an instance of this class can be
created with specific options and passed as an argument to
add pane.

Inherits from:
:    1. [ui.ImageScaleView](./ui-images.html#class-ui.imagescaleview)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.TabButton as TabButton;
~~~

### new TabButton([options])
1. `options {object}`
	* `width {number} = 1`
	* `height {number} = 1`
	* `fontFamily {string} = device.defaultFontFamily`
	* `fontSize {number} = 14`
	* `color {string} = '#b0b0b0'`
	* `activeColor {string} = '#000000'`
	* `backgroundColor {string} = `#d0d0d0``
	* `activeBackgroundColor {string} = '#d0d0d0'`
	* `image {Image}`
	* `activeImage {Image}`
	* `buttonHeight {number}`
	* `padding {number}`
	* `fixedWidth {number}`
	* `tabSize {}` ---Options are `'TabView.tabSize.AUTO'` or `'TabView.tabSize.FIXED'`.
	* `horizontalAlign {}`
	* `verticalAlign {}`

~~~
var tabs = new TabView({superview: this, x: 10, y: 10, width: 300, height: 300});

var tabbutton = new TabButton({
    image: "resources/images/tab.png",
    activeImage: "resources/images/tabActive.png",
    scaleMethod: "9slice",
    sourceSlices: {horizontal: {left: 20, center: 80, right: 20}, vertical: {top: 0, middle: 100, bottom: 0}},
    destSlices: {horizontal: {left: 20, right: 20}, vertical: {top: 0, bottom: 0}},
    color: "#505050",
    activeColor: "#000000",
    title: "Some title"
});

tabs.addPane(tabbutton, new TextView({
  text: "Hello world",
  layout: "box",
  layoutWidth: "100%",
  layoutHeight: "100%"
}));
~~~

#### buttonOpts.tabSize

Set the size of the tab buttons.
1. TabPaneView.tabSize.AUTO The tabs have the width of the title and the padding.
2. TabPaneView.tabSize.FIXED The tabs are sized to the given `'fixedWidth'` size.
3. TabPaneView.tabSize.FLEX The tabs are spread to use the available size of the widget.

#### buttonOpts.padding

Set the padding of the text on the tab buttons.
The padding can be a number or an array, if it's an array then the first element is the left and the second is the right padding.

#### buttonOpts.fixedWidth

The fixed width value is used when the tabSize is set to `'FIXED'`.

#### buttonOpts.image

This option can be a path to an image or an instance of `'ui.resource.Image'` and is applied to the background of the button.

#### buttonOpts.activeImage

This option can be a path to an image or an instance of `'ui.resource.Image'` and is applied to the background of the selected button.

#### buttonOpts.scaleMethod, buttonOpts.sourceSlices, buttonOpts.destSlices

If there is a background image used then these options can be used to change the way the background is applied
[ui.images](./ui-images.html).

#### buttonOpts.color

The color of the text of the tab button.

#### buttonOpts.activeColor

The color of the text of the selected tab button.

#### buttonOpts.backgroundColor

The background color of the tab buttons, this color is used when there's no background image selected.

#### buttonOpts.activeBackgroundColor

The background color of the selected tab button, this color
is used when there's no active background image selected.

#### buttonOpts.horizontalAlign

Set the horizontal alignment of the text on the tab buttons,
valid values are: `'left'`, `'right'`, `'center'` or `'justify'`.

#### buttonOpts.verticalAlign

Set the vertical alignment of the text on the tab buttons,
valid values are: `'top'`, `'middle'` or `'bottom'`.


### tabbutton.setTitle (title)
1. `title {string}`

Change the title.
