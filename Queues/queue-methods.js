const queueFuncs = {
    peek(queue) {
        return queue.first
    },
    isEmpty(queue) {
        if (queue.first) {
            return false
        }
        return true
    },
    display(queue) {
        if (queue.first === null) {
            return 'queue is empty'
        }
        let queueItems = []

        if (queue.first) {
            queue = queue.first
        }
        while (queue.next !== null) {
            queueItems.push(queue.value)
            queue = queue.next
        }
        queueItems.push(queue.value)
        return queueItems.join('\n')
    }
}

module.exports = queueFuncs
