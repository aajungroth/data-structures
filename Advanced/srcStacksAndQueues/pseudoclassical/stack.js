var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
  // size becomes a property of an instance of Stack
  // this is now bound to that instance, no return required
};

Stack.prototype.size = function() {
  return this._size;
};

Stack.prototype.push = function(value) {
  this._size++;
  this[this._size] = value;
};

Stack.prototype.pop = function() {
  var popped = this[this._size];

  delete this[this._size];
  if (this._size > 0) {
    this._size--;
  }
  return popped;
};

// protoype is like stack methods
// if you make a method inside then all instances would get one
