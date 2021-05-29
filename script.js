const lang = 'en';
const langRu = 'ru';
const langEn = 'en';
const ruDaysWeek = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение';
const enDaysWeek = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
const objDaysWeek = {
  'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение', ],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ],
};

if (lang === langRu) console.log(ruDaysWeek);
if (lang === langEn) console.log(enDaysWeek);

switch (lang) {
  case langRu:
    console.log(ruDaysWeek);
    break;
  case langEn:
    console.log(enDaysWeek);
    break;
}

console.log(objDaysWeek[lang]);

// Задача 2

const namePerson = 'Максим';
const director = 'Артем';
const teacher = 'Максим';

let message = namePerson === director ? 'Директор' :
  namePerson === teacher ? 'преподаватель' :
  'студент';

console.log(message);