let arrayToList = (ary) => {
    let rest = null;
    for (let i = ary.length - 1; i >= 0; i--) {
        rest = {"value": ary[i], "rest": rest};
    }
    return rest;
}

let listToArray = (list) => {
    let ary = [];
    while (list) {
        ary.push(list.value);
        list = list.rest;
    }
    return ary;
}

let prepend = (e, list) => {
    return {"value": e, "rest": list};
}

let nth = (list, n) => {
    while (list && n) {
        list = list.rest;
        n--;
    }
    return list && !n ? list.value : undefined;
}

let reversenth = (list, n) => {
    let alist = list;
    let len = 0;
    while (alist) {
        len++;
        alist = alist.rest;
    }
    return nth(list, len - 1 - n);
}

x = arrayToList([1,2,3]);
console.log(x);
console.log(listToArray(x));
console.log(JSON.stringify(prepend(0, x)));
console.log(nth(x, 1));
console.log(nth(x,5));
console.log(nth(x,2));
console.log(nth(x,3));
console.log(reversenth(x, 0));
console.log(reversenth(x, 3));