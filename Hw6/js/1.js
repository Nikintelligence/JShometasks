'use strict';

let count = 0;
    let textOn = 'мода дом домик домой одомашненный омномном мод домашний';
    let textSep = textOn.split(' ');
    let word = 'дом';
        function wordCount(textSep, word) {
            for (let i = 0; i < textSep.length; i++){
                if (textSep[i].includes(word)) {
                    count++;
                }
            }
        }
wordCount(textSep, word);
console.log(count);
