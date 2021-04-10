'use strict';

let plates = parseInt(prompt("(Задача три) Введите число тарелок:"))
alert(plates);
let soap = parseInt(prompt("(Задача три) Введите количество моющего средства:"))
alert(soap);

while (plates>0 && soap>0) {
  plates = --plates
  soap = soap-0.5
  console.log("Грязных тарелок осталось:" + plates)
  console.log("Моющего средства осталось:" + soap)
}

if (plates===0) {
  console.log("Тарелки чистые! Моющего средства осталось:" + soap)
} else {
  console.log("Средство закончилось! Немытых тарелок осталось:" + plates)
}
