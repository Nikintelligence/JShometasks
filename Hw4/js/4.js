'use strict';

let numsArr = [
            [3, 5, -1, 6, 0],
            [56, -9, 111, 6],
            [11, 86, -12],
        ];

let firsttask = numsArr.map(mas=>mas.map(num=>num*=10));
console.log("Массив по заданию 1:  "+firsttask);

let secondtask = numsArr.map(mas=>mas.filter(num=>num>0));
console.log("Массив по заданию 2:  "+secondtask);
