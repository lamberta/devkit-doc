/**
 * @param {function} ctor Constructor function which needs to inherit the prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = function (ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
	return ctor;
};
