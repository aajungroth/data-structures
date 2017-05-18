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
  console.log('THIS', this);
  return this._size;
};

stackMethods.push = function() {
  this._size++;
};

stackMethods.pop = function() {
  //var stackInstance = this;
  var stackSize = this._size;
  if (this._size) {
    this._size--;
  }
};

// stackMethods.prototype.size = a => {};

//  stack is like our prototype
//  stackMethods.prototype.size

// Object.create happens inside the Stack

// stackMethods.size = () => {
//   console.log('THIS', this)
//
// };
