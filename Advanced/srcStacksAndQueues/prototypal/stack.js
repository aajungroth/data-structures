var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(stackMethods);
  console.log('STORAGE', storage);
  storage._size = 0;
  return storage;
};

var stackMethods = {};



stackMethods.size = function() {
  //console.log('THIS', this);
  return this._size;
};

stackMethods.push = function(val) {
  var self = this;
  self._size++;
  this[self._size] = val;
};

stackMethods.pop = function() {
  var self = this;
  var popped = self[self._size];
  delete self[self._size];
  // var stackSize = this._size;
  if (self._size) {
    self._size--;
  }
  return popped;
};

// stackMethods.prototype.size = a => {};

//  stack is like our prototype
//  stackMethods.prototype.size

// Object.create happens inside the Stack

// stackMethods.size = () => {
//   console.log('THIS', this)
//
// };
