const { QueueStack } = require('./queue-stack')

const bankQueue = new QueueStack

const customers = ['Betsy', 'Frank', 'Ross', 'Peter', 'Julia', 'Amos', 'Harold', 'Samantha']
customers.forEach(customer => bankQueue.enqueue(customer))

function ophidianBank(queue) {
    let currentCustomer = queue.dequeue()

    while (currentCustomer !== null) {
        const badPaperwork = Math.random()
        if (badPaperwork <= .25) {
            console.log(`${currentCustomer} goes to back of the line`)
            queue.enqueue(currentCustomer)
        }
        else {
            console.log(`${currentCustomer} has completed their transaction`)
        }
        currentCustomer = queue.dequeue()
    }
    return `No customers left`
}
console.log(ophidianBank(bankQueue))