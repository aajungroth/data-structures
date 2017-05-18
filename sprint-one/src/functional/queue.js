var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[front];
    delete storage[front];
    if (size > 0) {
      size--;
      front++;
    }

    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


//enqueue('a');
// enqueue('b');

/*
{
  0: 'a',
  1: 'b'
}

dequeue();
front = 1;
size = 1;
{
  1: 'b',
}

enqueue('c');
{
  1: 'c'
}
*/
