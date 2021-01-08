const {Stack} = require('../Stacks/StackClass')

class QueueStack {
    constructor(){
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
    }

    enqueue(data){
        this.stackOne.push(data)
    }

    dequeue(){
        if(this.stackTwo.top ===null){
            if(this.stackOne.top === null){
                return null
            }
            while(this.stackOne.top){
                let value =  this.stackOne.pop()
                this.stackTwo.push(value)
            }
        }
        return this.stackTwo.pop()
    }
}

module.exports = {
    QueueStack
  };