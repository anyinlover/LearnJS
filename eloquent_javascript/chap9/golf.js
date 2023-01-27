let reg1 = /car|t/;
console.log(reg1.test("cars"));
console.log(reg1.test("cats"));

let reg2 = /pr?op/;
console.log(reg2.test("pop"));
console.log(reg2.test("prop"));

let reg3 = /ferr(et)|y|(ari)/;
console.log(reg3.test("ferret"));
console.log(reg3.test("ferry"));
console.log(reg3.test("ferrari"));

let reg4 = /\b\w*ious\b/;
console.log(reg4.test("delicious"));

let reg5 = /\s[.|,|:|;]/;
console.log(reg5.test(" ."));

let reg6 = /\b\w{6,}\b/;
console.log(reg6.test("helllo"));
console.log(reg6.test("hello"));

let reg7 = /\b[^\WeE]+\b/;
console.log(reg7.test("Hello"));
console.log(reg7.test("Htllo"));
