var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    _size : 0
  };

  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  size : function() {
    return this._size;
  },
  push : function(val) {
    this[this._size] = val;
    //console.log('THIS', this);
    this._size++;
  },
  pop : function() {
    var popped = this[this._size - 1];
    delete this[this._size - 1];
    if(this._size > 0) {
      this._size--;
    }
    return popped;
  }
};

// var ourStack = Stack();
// // ourStack.push('a')
// console.log('OURSTACK.PUSH(A)', ourStack.push('a'))
