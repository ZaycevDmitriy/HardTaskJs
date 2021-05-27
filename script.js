const num = 266219;
const numToString = num.toString();
const array = numToString.split(''); //?
let result = 1;

for (let item of array) {
  result *= item;
}

console.log(result);

const resultPow = result ** 3;
console.log( +(resultPow.toString().slice(0, 2)) );