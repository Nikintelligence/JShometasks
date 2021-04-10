'use strict';

function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min))+min;
}

let randonnum = getRandomInt(10,500)

if (randonnum>=25 && randonnum<=200) {
  console.log("Число"+ randonnum+ "содержится в интервале (25; 200)")
} else {
  console.log("Число"+ randonnum+ " НЕ содержится в интервале (25; 200)")
}
