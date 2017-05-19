var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    //If we have an empty linked list
    if (list.head === null) {
      list.head = node;
    //If we have at least one element in the linked list
    } else if (list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var next = list.head.next;
    var head = list.head.value;

    list.head = next;
    return head;
  };

  list.contains = function(target) {
    if (list.head !== null) {
      if (list.tail.value === target) {
        return true;
      }
      var currentNode = list.head;

      while (currentNode.next !== null) {
        if (currentNode.value === target) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
