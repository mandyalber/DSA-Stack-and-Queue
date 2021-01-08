class _Node {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class DoubleQueue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(value) {
        const node = new _Node(value)

        if (this.first === null) {
            this.first = node
        }
        else {
            this.last.next = node
            node.prev = this.last
        }
        this.last = node
    }

    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first

        if (node === this.last) {
            this.first = null
            this.last = null
            return
        }
        this.first = this.first.next
        this.first.prev = null
        return node.value
    }
}

module.exports = {
    DoubleQueue,
    _Node
}