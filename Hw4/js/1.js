'use strict';

function box(count, word = "товар") {
if (count%10===1) {
  if (count%100===11) {
    word = "товаров"
  }
  else {
    word="товар"
  }
}
if (count%10===2 || count%10===3 || count%10===4) {
  if (count%100===12 || count%100===13 || count%100===14) {
    word = "товаров"
  }
  else {
    word="товара"
  }
}
if (count%10===5 || count%10===6 || count%10===7 || count%10===8 || count%10===9 || count%10===0) {
  word="товаров"
}
return count+" "+word
}
let a = 1, b = 11, c = 8, d = 84, e = 85, f = 104, g = 113;
let cout = box(a);
console.log(cout)
cout = box(b);
console.log(cout)
cout = box(c);
console.log(cout)
cout = box(d);
console.log(cout)
cout = box(e);
console.log(cout)
cout = box(f);
console.log(cout)
cout = box(g);
console.log(cout)
