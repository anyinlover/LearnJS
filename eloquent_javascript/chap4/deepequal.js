let deepEqual = (x, y) => {
    for (let p of Object.keys(x)) {
        if (typeof(x[p]) === "object" && x[p] !== null
            && typeof(y[p]) === "object" && y[p] !== null) {
            if (deepEqual(x[p], y[p])) {
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

x = {"a":2, "b": null, "c": {"d":[1,2], "e": "fg"}}
y = {"a":2, "b": null, "c": {"d":[1,2], "e": "fg"}}
z = {"a":2, "c": null, "b": {"d":[1,2], "e": "fg"}}
console.log(deepEqual(x,y));
console.log(deepEqual(x,z));