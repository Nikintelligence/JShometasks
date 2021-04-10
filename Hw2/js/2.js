'use strict';



let a = parseInt(prompt("(Задача два) Введите первое число:"))
alert(a);
let b = parseInt(prompt("(Задача два) Введите второе числа:"))
alert(b);



console.log("3 значит: +")
console.log("5 значит: -")
console.log("7 значит: *")
console.log("9 значит: /")

let c = parseInt(prompt("(Задача два) Введите действие :"))
alert(c);

let res;

switch (c) {
  case 3:
      res = a + b;
      console.log(res)
    break;
  case 5:
  res = a - b;
      console.log(res)
    break;
  case 7:
  res = a * b;
      console.log(res)
    break;
  case 9:
  res = a / b;
      console.log(res)
    break;
  default:
console.log("Неверный ввод")
}
