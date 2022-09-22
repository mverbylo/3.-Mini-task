'use strict';
//---------------------------------5.Синтаксис классов. Геттеры и сеттеры
// Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
// from(число)
// to(число)

// Реализовать геттеры и сеттеры для обоих свойств.
// Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.


// Bonus tasks:
// Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
// Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to.

class RangeValidator {
  #to;
  #from;
  #range;
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this.#from;
  }
  get to() {
    return this.#to;
  }

  get range() {
    this.#range = [];
    for (; this.#from <= this.#to; this.#from++) {
      this.#range.push(this.#from);
    }
    return this.#range;
  }

  set from(newFrom) {
    if (typeof newFrom !== 'number' || isNaN(newFrom)) {
      throw new TypeError("Incorrect parameter, in 'from' expected number");
    }
    if (newFrom > this.#to) {
      throw new RangeError(
        "Incorrect parameter, in 'from' expected number less than 'to'"
      );
    }
    this.#from = newFrom;
  }

  set to(newTo) {
    if (typeof newTo !== 'number' || isNaN(newTo)) {
      throw new TypeError("Incorrect parameter, in 'to' expected number");
    }
    if (newTo < this.#from) {
      throw new RangeError(
        "Incorrect parameter, in 'to' expected number more than 'from'"
      );
    }
    this.#to = newTo;
  }

  validate(numberInRange) {
    if (numberInRange < this.#from || numberInRange > this.#to) {
      throw new RangeError(
        'Incorrect parameter, numberInRange не входит в range'
      );
    }
    return numberInRange;
  }
}
const range1 = new RangeValidator(10,20);


/*---------------------------------1. Минитаск Функции-конструкторы+прототипы
Создать функцию-конструктор User
у пользователей должны быть свойства:
firstName
lastName
email
age
isLoggedIn


Создать прототип для обїектов пользователей
в прототипе реализовать следующий методы:
getFullName - метод, который вернет строчку, содержащую имя и фамилию пользователя
logout - метод, который имитирует логаут пользователя, меняя переменную isLoggedIn
login - метод, который имитирует логин пользователя, меняя переменную isLoggedIn

function User(firstName, lastName, email, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = false;
}
const userProto = {
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  logout: function () {
    return (this.isLoggedIn = false);
  },
  login: function () {
    return (this.isLoggedIn = true);
  },
};
User.prototype = userProto;

// const user1 = new User('Taras', 'Bulba', 'taras@email.com', 64);
*/
/*---------------------------------2. Минитаска. Методы примитивов
// Функция которая принимает строку и возвращает количество слов в ней.
const DISALLOWED_WORDS = ['', '-', '+', '=', '(', ')'];
const str =
  'Функция которая принимает,           строку и возвращает количество слов в ней';

const wordsCount = (str) =>
  str.split(' ').filter((elem) => !DISALLOWED_WORDS.includes(elem)).length;
//10

const wordsCount2 = (str, disallowedWordsArray = DISALLOWED_WORDS) =>
  str.split(' ').filter((elem) => !disallowedWordsArray.includes(elem)).length;

// Функция, которая получает строку и возвращает размер самого большого слова в ней
const str2 =
  'Функция, которая получает строку и возвращает размер самого большого слова в ней';
  const bigWord = (str2) =>
  str2
    .split(' ')
    .reduce((word1, word2) => (word1.length > word2.length ? word1 : word2)).length;
//'10'
*/
/* --------------------------------3.Cтрелочные функции
//Создайте функцию, которая принимает неограниченное количество входящих данных,
//и возвращает количество строк, переданных ей в этом массиве.
//Решить с использованием стрелочных функций.

const countString = (...input) =>
  input.filter((elem) => (typeof elem === 'string')).length;

countString(2, 'text1', ...[2, 'text2']); //2

//Создайте функцию продвинутого калькулятора.
// Он принимает знак, а  затем неограниченное количество чисел,
// над которыми проведет указанную операцию.
const sum = (...numbers) =>
  numbers.reduce((res, currentNumber) => {
    if (
      typeof res !== 'number' ||
      typeof currentNumber !== 'number' ||
      isNaN(res - currentNumber)
    ) {
      return null;
    }
    return res + currentNumber;
  });

const subtraction = (...numbers) =>
  numbers.reduce((res, currentNumber) => {
    if (
      typeof res !== 'number' ||
      typeof currentNumber !== 'number' ||
      isNaN(res - currentNumber)
    ) {
      return null;
    }
    return res - currentNumber;
  });
const multiplication = (...numbers) =>
  numbers.reduce((res, currentNumber) => {
    if (
      typeof res !== 'number' ||
      typeof currentNumber !== 'number' ||
      isNaN(res - currentNumber)
    ) {
      return null;
    }
    return res * currentNumber;
  });
const division = (...numbers) =>
  numbers.reduce((res, currentNumber) => {
    if (
      typeof res !== 'number' ||
      typeof currentNumber !== 'number' ||
      isNaN(res - currentNumber)
    ) {
      return null;
    }
    return res / currentNumber;
  });

const calc = function (operator, ...numbers) {
  switch (operator.trim()) {
    case '+': {
      return sum(...numbers);
    }
    case '-': {
      return subtraction(...numbers);
    }
    case '*': {
      return multiplication(...numbers);
    }
    case '/': {
      return division(...numbers);
    }
    default:
      result = null;
  }
  return result;
};

calc('+', 10, 2); //12
calc('+', 10, 2, true); //null
calc('-', 10, 2); //8
calc('*', 10, 2); //20
calc('/', 10, 2); //5

//Имея массив чисел, найдите в нем самое большое.
//Не используйте циклы или методы перебора массива.
const arr = [-5, 40, 1000, 90];
Math.max(...arr); //1000
*/
/*---------------------------------4. Микротаски Рекурсия.
//Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120
function factorial(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new TypeError('number must be a positive integer number');
  }
  if (!Number.isInteger(number)) {
    throw new RangeError('number must be a integer number');
  }
  if (number < 0) {
    throw new RangeError('number must be a positive number');
  }
  return number > 0 ? number * factorial(number - 1) : 1;
}

try {
  factorial(1.5);
} catch (err) {
  alert(err.message);
}
*/