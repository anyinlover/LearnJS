function deepEqual(x, y) {
    for (let p of Object.keys(x)) {
        if (typeof (x[p]) === "object" && x[p] !== null
            && typeof (y[p]) === "object" && y[p] !== null) {
            if (!deepEqual(x[p], y[p])) {
                return false;
            }
        } else {
            if (x[p] !== y[p]) {
                return false;
            }
        }
    }
    return true;
}


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));