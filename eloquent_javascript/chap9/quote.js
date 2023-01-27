let reg = /'\b(\w+)\b'/g;

console.log("'Fun' story is Alice's job 'insert'".replace(reg, `"$1"`));