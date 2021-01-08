const { DoubleQueue } = require('./DoubleQueueClass')
const queueFuncs = require('./queue-methods')

let items = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov']
let starTrekQ = new DoubleQueue()
items.forEach(item => starTrekQ.enqueue(item))

console.log(queueFuncs.peek(starTrekQ))