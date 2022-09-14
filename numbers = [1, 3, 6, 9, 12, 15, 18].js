 let arraynumber [-4, 1, 11, 2, 22, 16, 37];

 let array = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = array[0],                       
    largest  = array[array.length - 1];

console.log(smallest);
console.log(largest);