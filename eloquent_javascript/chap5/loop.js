function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

loop(3, x => x < 5, x => x + 1, x => console.log(x));