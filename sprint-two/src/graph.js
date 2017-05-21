// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};
var graph = new Graph();
//console.log(graph);
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);

  return this.nodes.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromIndex = this.nodes.indexOf(fromNode);
  var toIndex = this.nodes.indexOf(toNode);
  var result = false;

  //nodes = [2, 5, 1, 3];
  //edges = [[0, 3];
  this.edges.forEach(function(edge, i) {
    if (_.contains(edge, fromIndex) && _.contains(edge, toIndex)) {
      result = true;
    }
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex = this.nodes.indexOf(fromNode);
  var toIndex = this.nodes.indexOf(toNode);
  var edge = [fromIndex, toIndex];

  //fromIndex, toIndex
  //toIndex, fromIndex
  this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //input two nodes
  //output
  //procedure find the edge that represents the connection
    //between those two nodes, then delete it

  var fromIndex = this.nodes.indexOf(fromNode);
  var toIndex = this.nodes.indexOf(toNode);
  var targetIndex;

  //iterate through the edges
  this.edges.forEach(function(edge, i) {
    if (_.contains(edge, fromIndex) && _.contains(edge, toIndex)) {
      targetIndex = i;
    }
  });
  this.edges.splice(targetIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i], i, this.nodes);
  }
};

// Graph.prototype.forEachEdge = function(node, cb) {
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */


// addNode
  // O(1) constant time bc pushing to back of graphs array
// contains
  // O(n) linear time due to for loop

// removeNode
  // O(n) linear time - bc indexOf iterates through graphs array
// hasEdge
  // 1n + 1n + 2n
    // contains is  2n because it is a tuple
  // O(n) linear time - iterates through graphs array
// addEdge
  // O(n) linear time - iterates through graphs array with indexOf
// removeEdge
  // O(n) linear time - iterates through graphs array with indexOf
// forEachNode
  // O(n) linear time- iterates through each node
