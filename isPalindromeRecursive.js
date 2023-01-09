const isPalindrome =(string, start=string[0], end=string[string.length-1] )=> {
    console.log(string)
    if(string.length === 0) return true
    if(start !== end) return false
    return isPalindrome(string.slice(1, string.length-1))
}
console.log(isPalindrome('roobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false
// console.log(isPalindrome('awesome')) // false