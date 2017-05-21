var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};
// prototypal structure
var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
  //add O(1) the set is implemented with an object, and since objects are
    //implemented with hash tables, the add is still taking advantage of
    //the hashing function
  //remove O(1) the set is implemented with an object, and since objects are
    //implemented with hash tables, the remove is still taking advantage of
    //the hashing function
  //contains O(n) the function runs the call back on every single node
