var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    delete storage[0];
    for (var i = 0; i < size; i++) {
      storage[i] = storage[i + 1];
    }
    if (size > 0) {
      size--;
    }
    for (var key in storage) {
      if (storage[key] === undefined) {
        delete storage[key];
      }
    }
    return dequeued;
  };
  someInstance.size = function() {
    return size;
  };
  return someInstance;
};

console.log('Functional Queue Ran');
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
