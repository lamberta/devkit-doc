# ui.widget.TabPaneView

## Class: ui.widget.TabPaneView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.TabPaneView as TabPaneView;
~~~

### new TabPaneView ([options])

1. `options {object}`
	* `buttonOpts {Object}` ---Optional
		* `tabSize {TabPaneView.tabSize}` ---Options: `'AUTO'`, `'FIXED'` or `'FLEX'`
		* `image {string|ui.resource.Image}` ---Optional
		* `activeImage {string}` ---Optional
		* `scaleMethod {string}` ---Optional see: [ui.images](./ui-images.html)
		* `sourceSlices {Object}` ---Optional see: [ui.images](./ui-images.html)
		* `destSlices {Object}` ---Optional see: [ui.images](./ui-images.html)
		* `color {string} = "#B0B0B0"` ---Optional, the default is applied in the TabPaneButton class
		* `activeColor {string} = "#000000"` ---Optional, the default is applied in the TabPaneButton class
		* `backgroundColor {string} = "#E0E0E0"` ---optional, the default is applied in the TabPaneButton class
		* `activeBackgroundColor {string} = "#D0D0D0"` ---Optional, the default is applied in the TabPaneButton class
		* `horizontalAlign {string}` ---Options: `"left"`, `"right"`, `"center"` or `"justify"`
		* `verticalAlign {string}` ---Options: `"top"`, `"middle"` or `"bottom"`
	* `contentOpts {Object}` ---Optional
	* `tabPosition {TabPaneView.tabPosition}` ---Options: `'TOP'`, `'RIGHT'`, `'BOTTOM'` or `'LEFT'` ---Optional

The contentOpts are passed to the constructor of the internal content view.

~~~
var tabPaneView = new TabPaneView();
~~~

### tabPaneView.addPane (button, child)
1. `button {string|ui.View}`
2. `child {ui.View}`
3. Return: `{ui.widget.TabPane}`

If the first argument is a string then the tab pane will create an instance of TabPaneButtonVew and use the
string value as title.
The child is the view with the content. This view will be placed in another view, the tab pane sizes this 
view to the available size within the tab pane and controls the visibility of this view with the pane select
function.

The folowing example shows how to create a basic tab pane with two pages. The tab buttons will be placed
at the top and the buttons will take the size of the text with a padding of ten pixels. It uses the default
grey colors.

~~~
var tabs = new TabPaneView({superview: this, x: 10, y: 10, width: 300, height: 200});

tabs.addPane("Game", new TextView({text: "This a tab pane", layout: "box", layoutWidth: "100%", layoutHeight: "100%"})));
tabs.addPane("Closure", new TextView({text: "This is another pane", layout: "box", layoutWidth: "100%", layoutHeight: "100%"})));
~~~

### tabPaneView.setTabPosition (position)
1. `position {TabPaneView.tabPosition}` ---Values: `'TOP'`, `'RIGHT'`, `'BOTTOM'` or `'LEFT'`

Change the position of the tab buttons.

### tabPaneView.updateButtonOpts (buttonOpts)
1. `buttonOpts {object}`
	* `tabSize {TabPaneView.tabSize}` ---Options: `'AUTO'`, `'FIXED'` or `'FLEX'`
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

Control the styling of the tab buttons. All listed options are optional however some options work together like
tabSize and fixedWidth, image and activeImage.

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

The background color of the selected tab button, this color is used when there's no active background image selected.

#### buttonOpts.horizontalAlign

Set the horizontal alignment of the text on the tab buttons, valid values are:
`"left"`, `"right"`, `"center"` or `"justify"`.

#### buttonOpts.verticalAlign

Set the vertical alignment of the text on the tab buttons, valid values are:

`"top"`, `"middle"` or `"bottom"`.

### Events

#### \'HidePane\', callback (tabPane)
1. `tabPane {ui.widget.TabPane}`

This event is called when the current tab is hidden.

#### \'ShowPane\', callback (tabPane)
1. `tabPane {ui.widget.TabPane}`

This event is called after a tab is selected and made visible.

## Class: ui.widget.TabPane

Inherits from:
:    1. [lib.PubSub](./lib-emitter.html)

### tabPane.remove ()

Remove the given tab pane from the tab pane view.

### tabPane.select ()

Select the given tab pane.

### tabPane.getContentView ()
1. Return: `{Object}`

This function returns a View or a subclass of View which is the content of the pane.

### tabPane.getButtonView ()
1. Return: `{Object}`

This function returns the View of the button, the default type is TabPaneButtonView.


## Class: TabPaneButtonView

When the first argument of addPane is a string then an instance of TabPaneButtonView as created for the 
button, this class is mainly for internal use in the TabPaneView but can be subclassed.

If it's necessary to create a unique style for each button in the tab pane then an instance of this class
can be created with specific options and passed as an argument to add pane.

~~~

var tabs = new TabPaneView({superview: this, x: 10, y: 10, width: 300, height: 300});

var tabPaneButtonView = new TabPaneButtonView({
    image: "resources/images/tab.png",
    activeImage: "resources/images/tabActive.png",
    scaleMethod: "9slice",
    sourceSlices: {horizontal: {left: 20, center: 80, right: 20}, vertical: {top: 0, middle: 100, bottom: 0}},
    destSlices: {horizontal: {left: 20, right: 20}, vertical: {top: 0, bottom: 0}},
    color: "#505050",
    activeColor: "#000000",
    title: "Some title"
});

tabs.addPane(tabPaneButtonView, new TextView({text: "Hello world", layout: "box", layoutWidth: "100%", layoutHeight: "100%"}));

~~~

### tabPaneButtonView.setTitle (title)
1. `totle {string}`

Change the title.
