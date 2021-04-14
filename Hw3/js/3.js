'use strict';

function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min))+min;
}

let rand = getRandomInt(-500,500)

let nums = [];
let newNums = [];
for (let i = 0; i < 30; i++) {
  nums[i] = rand;
  rand = getRandomInt(-500,500)
}
for (let i = nums.length - 1; i >= 0; i -= 1){
    // if (nums[i] < 0) newNums.push(nums.splice(i, 1)[0]);
    if (nums[i] < 0) newNums.push(nums[i]);
}
console.log(newNums);
