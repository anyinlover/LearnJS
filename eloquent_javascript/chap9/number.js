let reg = /^[+-]?((\d+(\.\d*)?)|(\.\d+))([Ee][+-]?(\d+))?$/;

console.log(reg.test("-153"));
console.log(reg.test("+153."));
console.log(reg.test("+153.98"));
console.log(reg.test("+.98"));
console.log(reg.test("+.98E-5"));
console.log(reg.test("+.98E-5."));
console.log(reg.test("+.98E-5.9"));
console.log(reg.test("-fj8"));
