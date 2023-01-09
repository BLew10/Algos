const factorial = (num) => {
    if (num <= 1) return 1
    return num * factorial(num - 1)
}

function power(num, pow) {
    if (pow === 0) return 1
    return 2 * power(num, --pow)
}
// console.log(factorial(5))



const productOfArray = (arr) => {
    //returned 1 because it is a product
    if (arr.length === 0) return 1
    //slice(1) removes the first value
    return arr[0] * productOfArray(arr.slice(1))
}// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


function recursiveRange(num) {
    if (num === 0) return 0
    return num + recursiveRange(--num)
}


// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function fib(num, prev = 0, curr = 1) {
    if (num === 0) return prev
    //dont want to add because it isnt a sum. You are getting a number in a list. Thus return once you get to the number you want
    return fib(--num, curr, prev + curr)
}


console.log(fib(35))
