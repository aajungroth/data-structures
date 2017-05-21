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
  var next;
  // right node or left node
  do {
    // if not null then...
    if (value > this.value) {
      // next
      next = this.right;
    } else {
      next = this.left;
    }
  } while (next !== null);

  next = BinarySearchTree(value);
  // if (value > this.value) {
  //   this.right = BinarySearchTree(value);
  // } else {
  //   this.left = BinarySearchTree(value);
  // }
};

storageMethods.contains = function() {};

storageMethods.depthFirstLog = function() {};

// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);
// expect(binarySearchTree.left.right.value).to.equal(3);
// expect(binarySearchTree.right.left.value).to.equal(6);

/*
 * Complexity: What is the time complexity of the above functions?
 */
