// Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
// как The Karate Kid (2010) и After Earth (2013). Джейден также
// известен своей философией, которую он распространяет через Twitter.
// Когда он пишет в Твиттере, он известен тем, что почти всегда использует
// каждое слово с большой буквы. Для простоты вам придется писать каждое слово
// с заглавной буквы, посмотрите, как ожидается сокращение в приведенном ниже примере.
// Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом.
// Строки - это настоящие цитаты Джейдена Смита, но они не пишутся с заглавной
// буквы так, как он их изначально набирал.

// String.prototype.toJadenCase = function () {
//   // пиши код тут
// };

// const sentence = "How can mirrors be real if our eyes aren't real";

// console.log(sentence.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {
//   return this.trim()
//     .split(" ")
//     .map((sent) => sent[0].toUpperCase() + sent.slice(1))
//     .join(" ");
// };

//     return this.split(" ").reduce((acc, el) => {
//       if (el) {
//         return acc + " " + el[0].toUpperCase() + el.slice(1);
//       }
//       return acc + el;
//     }, "");
//   };

//   const sentence = "How can  mirrors be real if our eyes aren't real     ";

//   console.log(sentence.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// function Account({ login, email }) {
//     this.login = login;
//     this.email = email;
// }

// Account.prototype.getInfo = function() {
//     console.log(`Логин: ${this.login}, email: ${this.email}`);
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         this.items = this.items.filter(itemEl => itemEl !== item);
//     }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// class StringBuilder {
//   constructor(str) {
//     this._value = str;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value = this.value + str;
//   }
//   prepend(str) {
//     this._value = str + this.value;
//   }
//   pad(str) {
//     this._value = str + this.value + str;
//   }
// }
// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// class Car {

//     static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
//       console.log(
//         `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`
//       );
//     }

//     constructor({ maxSpeed, price }) {
//       this.maxSpeed = maxSpeed;
//       this._price = price;
//       this.speed = 0;
//       this.isOn = false;
//       this.distance = 0;
//     }

//     get price() {
//       return this._price;
//     }

//     set price(newPrice) {
//       this._price = newPrice;
//     }

//     turnOn() {
//       this.isOn = true;
//     }

//     turnOff() {
//       this.isOn = false;
//       this.speed = 0;
//     }

//     accelerate(value) {
//       if (this.speed + value <= this.maxSpeed) {
//         this.speed += value;
//       }
//     }

//     decelerate(value) {
//       if (this.speed - value >= 0) {
//         this.speed -= value;
//       }
//     }

//     drive(hours) {
//       if (this.isOn) {
//         this.distance += hours * this.speed;
//       }
//     }
//   }

//   const mustang = new Car({ maxSpeed: 200, price: 2000 });

//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);

//   Car.getSpecs(mus

// Найти различия между цифрами в 2 массивах

// const first = [1, 3, 3, 4, 6, 5, 4];
// const second = [6, 3, 5, 2, 2];

// const third = [8, 13, 222, 93, 43, 11];
// const fourth = [8, 222, 12, 93, 77, 83, 12, 43];

// const getUnique = (firstArr, secondArr) => {
//   const array = firstArr.filter((el) => !secondArr.includes(el));
//   const array2 = secondArr.filter((el) => !firstArr.includes(el));

//   return [...array, ...array2]
//     .filter((el, index, arr) => arr.indexOf(el) === index)
//     .sort();
// пиши код тут
// };

// console.log(getUnique(first, second)); // [1, 2, 4]
// console.log(getUnique(third, fourth)); // [11, 12, 13, 77, 83]

// Допустим, вам дан массив {1,2,3,4,3,2,1}:
// Ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части
// индекса ({1,2,3}) и сумма правой части индекса ({3,2, 1}) оба равны 6.

// Посмотрим еще на один.
// Вам дан массив {1,100,50, -51,1,1}:
// Ваша функция вернет индекс 1, потому что в 1-й позиции
// function findEvenIndex(arr) {
// пиши код тут
// }

// ТЕСТЫ

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
// function findEvenIndex(arr) {
// пиши код тут
// }

// ТЕСТЫ

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
