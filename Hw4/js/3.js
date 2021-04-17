'use strict';

function splitString(stringToSplit, separator) {
let arrayOfStrings = stringToSplit.split(separator);

let spam = 0;
let textquality = 5;

console.log('Оригинальный текст: "' + stringToSplit + '"');

for (let i = 0; i < arrayOfStrings.length; i++) {
  if (arrayOfStrings[i]==="dolor" || arrayOfStrings[i]==="error") {
    spam ++
  }
}
textquality = 5 * (1 - spam/arrayOfStrings.length)
console.log("Количество слов-спама = "+spam)
console.log("Качество текста от 0 до 5 :  "+textquality.toFixed(2))
}


let tempestString = "who is all this deception error for moreover advertisers claim error that dolor viewing ads is dolor voluntary ";
let space = ' ';


splitString(tempestString, space);
