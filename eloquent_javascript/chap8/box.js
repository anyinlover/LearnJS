const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked() {
    box.unlock();
    try {
        func(box.content);
    } finally {
        box.lock();
    }
}

withBoxUnlocked(a => a.push(1));
console.log(box.locked);