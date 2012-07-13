var list = new timestep.ui.List({
  parent: this.view,
  dataSource: GC.contacts.getDataSource(),
  width: timestep.device.width-20,
  height: timestep.device.height-20,
  x: 10,
  y: 10,
  scrollX: false,
  backgroundColor: 'white',
  sorter: function (data) { return data.name.toLowerCase(); },
  getCell: function () { return new ContactCell({parent: list}); },
});
