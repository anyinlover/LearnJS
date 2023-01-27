test = {
    "a": 1,
    "hasOwnProperty": 2
}

console.log(Object.prototype.hasOwnProperty.call(test, "a"));