'use strict';

const week = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const arrMonths = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

let getTodayDate = () => new Date();

function numWord(value, words){  
	value = Math.abs(value) % 100; 
	var num = value % 10;
	if(value > 10 && value < 20) return words[2]; 
	if(num > 1 && num < 5) return words[1];
	if(num == 1) return words[0]; 
	return words[2];
}

const weekDay = document.querySelector('.week-day'),
  numberMonth = document.querySelector('.number-month'),
  month = document.querySelector('.month'),
  year = document.querySelector('.year'),
  hour = document.querySelector('.hour'),
  hourText = document.querySelector('.hour-text'),
  minute = document.querySelector('.minute'),
  minuteText = document.querySelector('.minute-text'),  
  second = document.querySelector('.second'),
  secondText = document.querySelector('.second-text');

let dateDay = getTodayDate();

weekDay.textContent = week[dateDay.getDay()];
numberMonth.textContent = dateDay.getDate();
month.textContent = arrMonths[dateDay.getMonth()];
year.textContent = dateDay.getFullYear();
hour.textContent = dateDay.getHours();
hourText.textContent = numWord(dateDay.getHours(), ['час', 'часа', 'часов',]);
minute.textContent = dateDay.getMinutes();
minuteText.textContent = numWord(dateDay.getMinutes(), ['минута', 'минуты', 'минут',]);
second.textContent = dateDay.getSeconds();
secondText.textContent = numWord(dateDay.getSeconds(), ['секунда', 'секунды', 'секунд',])
