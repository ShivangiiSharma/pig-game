'use strict';

console.log('hey!');

for (let i = 0; i < 10; i++) {
  console.log(`line ${i}`);
}

// one

function sum1(abc) {
  return abc + 2;
}
// two

const sum2 = function (abc) {
  console.log(abc + 2);
};

// three

const sum3 = abc => console.log(abc + 2);

console.log(sum1(2));
sum2(4);
sum3(6);
