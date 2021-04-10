'use strict';

console.log("Загадайте число от 1 до 100");
console.log("Не жульчичать!");
console.log("Загадали?");
console.log("Поехали!");

let chis = 100
let ans = "нет"
let moreless = "м"
while (ans!=="да") {
  console.log("Загаданное число = " +chis+ "?");
  ans = parseInt(prompt("Можно ответить да/нет"));
  if (ans == "нет") {
    console.log("Оно больше или меньше?")
    moreless = parseInt(prompt("Можно ответить б или м"));
    if (moreless =="м") {
      chis = (chis-chis%2)/2
    } else {
      chis = chis+(chis-chis%2)/2
    }
  }
}
console.log("Ура! Угагаданное число = " +chis)
