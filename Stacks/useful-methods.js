const helperFuncs = {
    peek(stack) {
        return stack.top
    },
    isEmpty(stack) {
        if (stack.top) {
            return false
        }
        return true
    },
    display(stack) {
        if (!stack.top) {
            return 'stack is empty'
        }
        let stackItems = []

        if (stack.top) {
            stack = stack.top
        }
        while (stack.next !== null) {
            stackItems.push(stack.data)
            stack = stack.next
        }
        stackItems.push(stack.data)
        return stackItems.join('\n')
    }
}

module.exports = helperFuncs
/*
const starTrek = require('./create-stack-class')
starTrek.pop()//remove Scotty as he is last
starTrek.pop()//remove McCoy
starTrek.push('Scotty')//add back Scotty

console.log(helperFuncs.display(starTrek))*/