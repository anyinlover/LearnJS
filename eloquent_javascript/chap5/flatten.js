let flatten = (x) => {
    return x.reduce((a,b)=>a.concat(b));
}

console.log(flatten([[1,2],[3,4]]));