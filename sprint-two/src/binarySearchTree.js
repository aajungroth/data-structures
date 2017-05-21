var BinarySearchTree = function(nodeValue) {

  var storage = {};
  storage.value = nodeValue;
  storage.left = null;
  storage.right = null;

  _.extend(storage, storageMethods);

  return storage;
};

var storageMethods = {};

storageMethods.insert = function(nodeValue) {
  if (nodeValue > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(nodeValue);
    } else {
      this.right.insert(nodeValue);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(nodeValue);
    } else {
      this.left.insert(nodeValue);
    }
  }
};

storageMethods.contains = function(nodeValue) {
  if (nodeValue === this.value) {
    return true;
  }
  if (nodeValue > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(nodeValue);
    }
  } else {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(nodeValue);
    }
  }
};

storageMethods.depthFirstLog = function() {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
