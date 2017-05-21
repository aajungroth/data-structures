var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.forEachTree = function(cb) {
  //run call back on the current tree
  cb(this.value);

  //iterate over the trees children
  for (var i = 0; i < this.children.length; i++) {
    //recurse on the children
    this.children[i].forEachTree(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//add child O(1) because we are inserting to the back of the array
//contains O(n) we are iterating on every child in the tree in the worst case
  //even though it a recursive function, it only iteratives over everything  //once
//forEachTree O(n) we iterate on every single node in the tree
