import device;
import ui.LayoutView as LayoutView;
import ui.TextView as TextView;

exports = Class(GC.Application, function() {

  this.initUI = function () {

    /* Create a LayoutView as the root layout,
     * position children in the center horizontally and vertically.
     */
    var layout = new LayoutView({
      direction: 'right',
      halign: 'center',
      valign: 'center'
    });
    
    this.view.push(layout); //add to the root StackView

    //Fixed sized box positioned in the center of the screen.
    var modal = new LayoutView({
      superview: layout,
      width: device.height,
      height: device.height,
      direction: 'right'
    })

    /* Three columns in the center view.
     * They have incrementally larger "hflex" values and take up
     * progressively larger ratios of free space.
     */
    var column1 = new TextView({
      superview: modal,
      text: 'One',
      hflex: 1,
      vflex: 1,
      backgroundColor: 'red'
    });
    
    var column2 = new TextView({
      superview: modal,
      text: 'Two',
      hflex: 2,
      vflex: 1,
      backgroundColor: 'green'
    });
    
    var column3 = new TextView({
      superview: modal,
      text: 'Three',
      hflex: 3,
      vflex: 1,
      backgroundColor: 'blue'
    });
  }
});
