'use strict';

function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min))+min;
}

let randonnum = getRandomInt(-500,500)
let massiv = [];
let min = 0;
let max = 0;

for (let j = 0; j < 8; j++) {
  massiv[j] = randonnum;
  if (massiv[j]<min) {
    min = massiv[j]
  }
  if (massiv[j]>max) {
    max = massiv[j]
  }
  randonnum = getRandomInt(-500,500)
}
console.log("Массив со случайными числами: "+massiv);
console.log("Максимальное число = "+max);
console.log("Минимальное число = "+min);
