'use strict';

function range(start, end, step = 1){
  let arr = [];
  for (let i = start; i <= end; i += step){
        arr[i] = i;
    }
  return arr
}
let mas = range(2, 108)
console.log(mas)
