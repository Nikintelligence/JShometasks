'use strict';

function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min))+min;
}

let rand = getRandomInt(1,9)

while (true) {
  let usernum = parseInt(prompt("Угадайте число"));
  if (usernum ===0){
      console.log("Игра завершена")
      break
  }
  if (usernum===rand) {
    console.log("Вы угадали")
    break
  }
  if (usernum>rand) {
    console.log("Загаданное число меньше")
} else console.log("Загаданное число больше")
}
