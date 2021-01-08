const { QueueStack } = require('./queue-stack')

const danceQueue = new QueueStack

let dancers = [
    { gender: 'F', name: 'Jane' },
    { gender: 'M', name: 'Frank' },
    { gender: 'M', name: 'John' },
    { gender: 'M', name: 'Sherlock' },
    { gender: 'F', name: 'Madonna' },
    { gender: 'M', name: 'David' },
    { gender: 'M', name: 'Christopher' },
    { gender: 'F', name: 'Beyonce' },
]

dancers.forEach(dancer => danceQueue.enqueue(dancer))

function squareDance(queue) {
    const pair = {
        F: 'M',
        M: 'F'
    }

    const spareDancers = new QueueStack()
    let currentDancer = queue.dequeue()

    while (currentDancer !== null) {
        if (spareDancers.stackOne.top === null) {
            spareDancers.enqueue(currentDancer)
        }
        else {
            if (spareDancers.stackOne.top.data.gender === pair[currentDancer.gender]) {
                let danceMatch = spareDancers.dequeue()
                console.log(`${danceMatch.name} is dancing with ${currentDancer.name}`)
            }
            else {
                spareDancers.enqueue(currentDancer)
            }
        }
        currentDancer = queue.dequeue()
    }
    let leftDancers = spareDancers.dequeue()

    while(leftDancers !== null){
        console.log(`${leftDancers.name} is waiting to dance.`)
        leftDancers = spareDancers.dequeue()
    }
}

squareDance(danceQueue)
/*  Female dancer is Jane, and the male dancer is Frank
    Female dancer is Madonna, and the male dancer is John
    Female dancer is Beyonce, and the male dancer is Sherlock
    There are 2 male dancers waiting to dance
*/