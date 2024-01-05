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
        this.ary = this.ary.filter(v => v != key);
    }

    has(key) {
        return this.ary.includes(key);
    }

    static from(iters) {
        let res = new Group();
        for (let iter of iters) {
            res.add(iter);
        }
        return res;
    }
}

a = [4, 7, 9];
b = Group.from(a);
b.add(10);
b.delete(7);
console.log(b.has(7));