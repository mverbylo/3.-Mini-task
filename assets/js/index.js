// Минитаска. Методы примитивов
// Функция которая принимает строку и возвращает количество слов в ней.
const str =
  'Функция которая принимает,           строку и возвращает количество слов в ней';

function wordsCount(str) {
  const words = str.split(' ');
  const deleteSpace = words.filter(function (elem) {
    return elem !== '';
  });
  return deleteSpace.length;
}
//10

// Функция, которая получает строку и возвращает размер самого большого слова в ней
const str2 =
  'Функция, которая получает строку и возвращает размер самого большого слова в ней';

function bigWord(str2) {
  const words = str2.split(' ');
  let j = 0;
  let result;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > j) {
      j = words[i].length;
      result = words[i];
    }
  }
  return result;
}
//'возвращает'

/*Минитаск Функции-конструкторы+прототипы
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
