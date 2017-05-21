var BinarySearchTree = function(value) {

  var storage = {};
  storage.value = value;
  storage.left = null;
  storage.right = null;

  _.extend(storage, storageMethods);

  return storage;
};


var storageMethods = {};


storageMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

};

//BinarySearchTree(value);
// storageMethods.insert = function(value) {
//   var next;
//   // right node or left node
//   do {
//     // if not null then...
//     if (value > this.value) {
//       // next
//       next = this.right;
//     } else {
//       next = this.left;
//     }
//   } while (next !== null);
//
//   next = BinarySearchTree(value);
// };

storageMethods.contains = function() {};
storageMethods.depthFirstLog = function() {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
