let range = (b, e, s) => {
    let result = [];
    for (let i = b; s > 0 ? i <= e : i >= e; i+=s) {
        result.push(i);
    }
    return result;
}

let sum = (a) => {
    let sum = 0;
    for (let i of a) {
        sum += i;
    }
    return sum;
}

console.log(range(1,10,1));
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(sum(range(1,10,1)));