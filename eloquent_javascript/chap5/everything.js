let every = (ary, pred) => {
    for (let e of ary) {
        if (!pred(e)) {
            return false;
        }
    }
    return true;
}

let every2 = (ary, pred) => !ary.some(x=>!pred(x));

console.log(every([1,3,5], x=>x%2==1));
console.log(every([1,3,6], x=>x%2==1));
console.log(every2([1,3,5], x=>x%2==1));
console.log(every2([1,3,6], x=>x%2==1));