/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if(n < 3) return n
    
    let a = 1
    let b = 2
    let c = 0 
    for(let i =3; i<=n; i++){
        c = a+b
        a = b
        b = c 
    }
    return c
    };
console.log(climbStairs(7))
console.log(climbStairs(4))
console.log(climbStairs(2))
console.log(climbStairs(6))