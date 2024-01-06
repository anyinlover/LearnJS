class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(x, y) {
    if (Math.random() > 0.8) {
        return x * y;
    } else {
        throw new MultiplicatorUnitFailure("unit failure");
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            return reliableMultiply(a, b);
        } else {
            throw e;
        }
    }
}

console.log(reliableMultiply(3, 4));