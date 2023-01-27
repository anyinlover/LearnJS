class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(x, y) {
    if (Math.random() > 0.8) {
        return x * y;
    } else {
        throw new MultiplicatorUnitFailure("unit failure");
    }
}
function multiply(x, y) {
    try {
        return primitiveMultiply(x, y);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            return multiply(x, y);
        } else {
            throw e;
        }
    }
}

console.log(multiply(3,4));