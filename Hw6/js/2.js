'use strict';

function findPaidrom(phrase){
  let first = phrase.split(" ");
  let second = first.join("");
  let i = 0, j = second.lenght - 1;
  while (i <= Math.floor((second.lenght - 1)/2) && j >= Math.floor((second.lenght - 1)/2)){
    let comp = second[i].localeCompare(second[j], undefined, {sensitivity: `accent`})
    if (comp === 0){
      i++, j--
    } else return `Фраза "${phrase}" не палидром `
  } return `Фраза "${phrase}" палидром `
}
let check = "А роза упала на лапу Азора";
console.log(findPaidrom(check));
