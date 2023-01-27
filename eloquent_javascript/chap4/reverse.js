let reverseArray = (ary) => {
    let nary = []
    for (let i = ary.length - 1; i >= 0; i--) {
        nary.push(ary[i]);
    }
    return nary;
}

let reverseArrayInPlace = (ary) => {
    let i = 0;
    let j = ary.length - 1;
    let tmp;
    while (i < j) {
        tmp = ary[i];
        ary[i] = ary[j];
        ary[j] = tmp;
        i++;
        j--;
    }
}

let x = [1,3,5,7,9];
console.log(reverseArray(x));
reverseArrayInPlace(x);
console.log(x);