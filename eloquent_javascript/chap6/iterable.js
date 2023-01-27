class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.group = group;
    }

    next() {
        if (this.i == this.group.ary.length) return {done: true};

        let value = this.group.ary[this.i];
        this.i++;
        return {value, done: false};
    }
}

class Group {
    constructor() {
        this.ary = [];
    }

    add(key) {
        if (!this.has(key)) {
            this.ary.push(key);
        }
    }


    delete(key) {
        if (this.has(key)) {
            let ary = [];
            for (let a of this.ary) {
                if (a !== key) {
                    ary.push(a);
                }
            }
            this.ary = ary;
        }
    }

    has(key) {
        for (let a of this.ary) {
            if (a === key) {
                return true;
            }
        }
        return false;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

    static from(iters) {
        let res = new Group();
        for (let iter of iters) {
            res.add(iter);
        }
        return res;
    }
}

a = [4,7,9];
b = Group.from(a);
b.add(10);
b.delete(7);
console.log(b.has(7));
for (let i of b) console.log(i);
