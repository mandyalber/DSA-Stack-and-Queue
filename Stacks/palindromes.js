const { Stack, _Node } = require('./StackClass')

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    const palStack = new Stack()

    for (let i = 0; i < s.length; i++) {
        palStack.push(s[i])        
    }
   
    let reverse = ''

    while (palStack.top !== null) {
        reverse += palStack.pop()
    }
    return s === reverse
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));