const { Queue, _Node } = require('./QueueClass')
const queueFuncs = require('./queue-methods')

let items = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov']
let starTrekQ = new Queue()
items.forEach(item => starTrekQ.enqueue(item))

console.log(queueFuncs.display(starTrekQ))

