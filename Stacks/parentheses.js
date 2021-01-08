const { Stack, _Node } = require('./StackClass')
const helperFuncs = require('./useful-methods')

function checkExpression(exp) {
    let stack = new Stack()
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === '(' || exp[i] === '{' || exp[i] === '[') {
            stack.push(exp[i])
        }
        else {
            let last = stack.pop()
            if (exp[i] !== map[last]) { 
                return false 
            }
        }
    }

    if (!helperFuncs.isEmpty(stack)) { 
        return false 
    }
    return true
}

console.log(checkExpression('{([])}'))//true
console.log(checkExpression('{([})}'))//false
