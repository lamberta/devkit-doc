import ui.ScrollView as ScrollView;
import ui.ImageView as ImageView;
import ui.resource.Image as Image;

var bgimage = new Image({url: 'resources/images/europemap.jpg'});

exports = Class(GC.Application, function () {
  
  this.launchUI = function () {

    var scrollview = new ScrollView({
      offsetX: -800,
      offsetY: -800,
      scrollBounds: {
        minX: 0,
        maxX: bgimage.getWidth(), //=> 2291 px
        minY: 0,
        maxY: bgimage.getHeight() //=> 1682 px
      }
    });
    
    var imageview = new ImageView({
      superview: scrollview,
      image: bgimage,
      width: bgimage.getWidth(),
      height: bgimage.getHeight(),
      autoSize: true
    });
    
    this.view.push(scrollview); //add to the root StackView
  };
});
