var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
};

Queue.prototype.size = function() {
  return this._size;
};

Queue.prototype.enqueue = function(value) {
  this[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this[0];

  for (var i = 0; i < this._size; i++) {
    this[i] = this[i + 1];
  }
  if (this._size > 0) {
    this._size--;
  }

  return dequeued;
};
