function every(array, test) {
    for (let e of array) {
        if (!test(e)) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 3, 5], x => x % 2 == 1));
console.log(every([1, 3, 6], x => x % 2 == 1));