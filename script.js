'use strict';
const button = document.getElementById('change');

const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

const setColor = () => {
  const color = randomColor();
  document.body.style.backgroundColor = '#' + color;
  document.getElementById('color').textContent = `#${color}`;
  button.style.color = '#' + color;
};

button.addEventListener('click', setColor);
