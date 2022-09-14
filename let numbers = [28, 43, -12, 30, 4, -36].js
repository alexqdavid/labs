let numbers = [28, 43, -12, 30, 4, -36]
let smallest = numbers[0];
let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
   if (smallest > numbers[i]) {
       smallest = numbers
   } else if (largest < numbers[i]) {
              largest = numbers
              console.log(smallest, largest);
   }
} 