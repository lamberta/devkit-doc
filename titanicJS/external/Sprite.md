#Sprite

##Examples
~~~
import timestep.Sprite as Sprite;

var sprite = new Sprite({
  parent: GC.app.view,
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  defaultAnimation: 'default',
  animations: {
    'default': {
      imageURL: 'resources/img/luigi-sheet.png',
      sheetWidth: 400,
      sheetHight: 200,
      spritesWide: 8,
      spritesHigh: 4,
      start: 0,
      end: 7
    },
    'another': {
      imageURL: 'resources/img/luigi-sheet.png',
      sheetWidth: 400,
      sheetHight: 200,
      spritesWide: 8,
      spritesHigh: 4,
      start: 8,
      end: 15
    }
  }
});

sprite.startAnimation('another', {iterations: 2});
~~~

#Sprite.getFront
Warning: This might be useless!
