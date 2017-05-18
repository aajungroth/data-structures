var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);

  storage._size = 0;
  return storage;
};

var queueMethods = {};

queueMethods.size = function() {
  return this._size;
};

queueMethods.enqueue = function(value) {
  this[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function() {
  var dequeued = this[0];

  for (var i = 0; i < this._size; i++) {
    this[i] = this[i + 1];
  }
  if (this._size > 0) {
    this._size--;
  }
  return dequeued;
};