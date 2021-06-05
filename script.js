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

const getTodayDate = () => {
  let date = new Date();
  return date.getDay();
};

  const outputHtmlDay = (arr) => {
    const today = getTodayDate();
    const out = document.querySelector('.out');
    const listElem = document.createElement('ul');

    out.append(listElem);

    arr.forEach((item, index) => {
      let itemListElem = document.createElement('li');

      if (index === today) itemListElem.style.fontWeight = 'bold';

      if (index === 0 || index === 6) itemListElem.style.fontStyle = 'italic';

      itemListElem.textContent = item;

      listElem.append(itemListElem);
    });
};

outputHtmlDay(week);
