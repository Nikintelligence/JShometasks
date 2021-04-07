'use strict';
// если start < end
let start = 214748364;
let end = 2147483646;
let between = 0;
between = start<end ? end - start : --between;
console.log(between);

// если start > end
start = 2147483646;
end = 214748364;
between = 0;
between = start<end ? end - start : --between;
console.log(between);
