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
    return 0;
  }

  // push = function() { // this? }

  // pop = function() { }
};
