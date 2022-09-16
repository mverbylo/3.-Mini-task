'use strict';
// ---------------------------------2. Минитаска. Методы примитивов
// Функция которая принимает строку и возвращает количество слов в ней.
const str =
  'Функция которая принимает,           строку и возвращает количество слов в ней';

const wordsCount = (str) => str.split(' ').filter((elem) => elem !== '').length;
//10

// Функция, которая получает строку и возвращает размер самого большого слова в ней
const str2 =
  'Функция, которая получает строку и возвращает размер самого большого слова в ней';
function bigWord(str2) {
  let words = str2.split(' '),
    j = 0,
    result;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > j) {
      j = words[i].length;
      result = words[i];
    }
  }
  return result.length;
}
//'10'

// ---------------------------------3.Cтрелочные функции
//Создайте функцию, которая принимает массив с неограниченным количеством данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций
const array = [2, 4, 'text1', 'text2', 'text3', 5];
const countString = (array) =>
  array.filter((elem) => (elem = typeof elem === 'string')).length;

countString(array); //3

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
