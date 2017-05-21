var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    _size: 0
  };

  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  size: function() {
    return this._size;
  },
  enqueue: function(value) {
    this[this._size] = value;
    this._size++;
  },
  dequeue: function () {
    var dequeued = this[0];

    delete this[0];
    for (var i = 0; i < this._size; i++) {
      this[i] = this[i + 1];
    }
    if (this._size > 0) {
      this._size--;
    }
    for (var key in this) {
      if (this[key] === undefined) {
        delete this[key];
      }
    }
    return dequeued;
  }
};
