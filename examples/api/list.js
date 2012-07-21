import device;
import ui.widget.List as List;
import ui.widget.Cell as Cell;

var list = new List({
  superview: this.view,
  dataSource: books.getDataSource(),
  width: device.width - 20,
  height: device.height - 20,
  x: 10,
  y: 10,
  scrollX: false,
  backgroundColor: 'white',
  sorter: function (data) { return data.name.toLowerCase(); },
  getCell: function () { return new Cell({superview: list}); },
});
