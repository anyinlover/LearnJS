class PGroup {
  constructor(ary) {
    this.ary = ary;
  }

  add(key) {
    if (this.has(key)) return this;
    return new PGroup(this.ary.concat([key]));
  }


  delete(key) {
    if (!this.has(key)) return this;
    return new PGroup(this.ary.filter(v => v != key));
  }

  has(key) {
    return this.ary.includes(key);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false