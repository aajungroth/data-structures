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
  if (typeof nodeValue === 'number') {
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
  } else if (typeof nodeValue === 'string'){
    if (nodeValue.length > this.value.length) {
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
  }

};

storageMethods.contains = function(nodeValue) {
  if (nodeValue === this.value) {
    return true;
  }
  if (typeof nodeValue === 'number') {
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
  } else if (typeof nodeValue === 'string') {
    if (nodeValue.length > this.value.length) {
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
  }
};

storageMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
};

console.log('BinarySearchTree Ran');

/*
 * Complexity: What is the time complexity of the above functions?
 * insert O(log(n)) Divides the search space in half with each iteration
 * contains O(log(n)) Divides the search space in half with each iteration
 * depthFirstLog O(n) It applys the call back to every single node
 */
