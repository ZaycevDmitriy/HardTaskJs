const arr = ['325', '3652', '2476', '96874', '42154', '7546', '26689',];

const sortNumber = (n1, n2) => {
  let str = '';
  for (const item of arr) {
    if (item.slice(0, 1).includes(String(n1)) || item.slice(0, 1).includes(String(n2))) str += item + ' ';
  }
  return str;
}

console.log(sortNumber('2', '4'));

const getPrimeNumber = (n) => {
  let str = '';
  nextPrime:
  for (let i = 2; i <= n; i++) {
    for (let k = 2; k < i; k++) {
      if (i % k === 0) continue nextPrime;
    }
    str += `Делители этого числа: 1 и ${i} \n`;
  }
  return str;
}

console.log(getPrimeNumber(100));
