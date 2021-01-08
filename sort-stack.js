const { Stack, _Node } = require('./StackClass')
const helperFuncs = require('./useful-methods')
const starTrek = require('./create-stack-class')

function stackSort(stack){
    let sortedStack = new Stack()

    while(stack.top){
        let tempNode =  stack.pop()

        while (sortedStack.top && sortedStack.top.data < tempNode){
            stack.push(sortedStack.pop())
        }
        sortedStack.push(tempNode)
    }
    return sortedStack
}
console.log(helperFuncs.display(starTrek))//display unsorted
console.log(helperFuncs.display(stackSort(starTrek)))//display sorted