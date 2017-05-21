var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];

  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
    }
  }
  this._storage[index].push(tuple);
  //this._storage[index] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  for (var i = 0; i < this._storage[index].length; i++) {
    if ((this._storage[index][i]) && (this._storage[index][i][0] === k)) {
      return this._storage[index][i][1];
    }
  }
  //return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  if (Array.isArray(this._storage[index])) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if ((this._storage[index][i]) && (this._storage[index][i][0] === k)) {
        delete this._storage[index][i];
      }
    }
  }
  //delete this._storage[index];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// Insert is constant time O(1)
  // we can do constant time lookup due to hashing function
// Retrieve is constant time O(1)
  // we can do constant time lookup due to hashing function
// Remove is constant time O(1)
  // we can do constant time lookup due to hashing function
