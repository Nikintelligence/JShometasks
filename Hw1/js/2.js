'use strict';

let a = 467;
let b = 369;
// меняем местами
a = b-a;
b = b-a;
a = b+a;

console.log(a);
console.log(b);
// меняем обратно
a = b-a;
b = b-a;
a = b+a;

console.log(a);
console.log(b);
