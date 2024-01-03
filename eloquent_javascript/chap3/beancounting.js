function countChar(s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c)
            count += 1;
    }
    return count;
}

let countBs = s => countChar(s, "B");

console.log(countChar("Hello", "l"));
console.log(countBs("BadBoy"));