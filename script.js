'use strict'
const lineСhange = (str) => {
  if (typeof str !== 'string') return ('Введите строку!');
  const newStr = str.trim();
  if (newStr.length >= 30) return (newStr.slice(0, 30) + '...');
  if (newStr.length < 30) return newStr;
}

const userString = '    Используется для доступа к символу в позиции N    ';

console.log(lineСhange(userString));