'use strict';

let mas = [
        [23, 56, 75, -90, 123],
        [17, 0, -6429, -122],
        [19, 86, 55, -3, 900, 0, 0],
        [4, 9, -2]
    ]
//  сортировка:
let array = mas[0]
for (let i = 0 ; i < mas.length; i++) {
  array = mas[i]
  for (let j = 0; j < array.length; j++) {
    array[j] += 10
  }
}
console.log(mas)
