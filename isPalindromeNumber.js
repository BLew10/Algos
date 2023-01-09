var isPalindrome = function(x) {
    if(x < 0) return false
    let xString = x.toString()
    for(let i = 0; i < xString.length/2; i++){
        if(xString[i] !== xString[xString.length-i-1]) return false
    }
    return true
};

function isPalindrome(x) {
  // If the number is negative, it is not a palindrome
  if (x < 0) {
    return false;
  }

  // Reverse the number
  let reversed = 0;
  let original = x;
  while (x > 0) {
    reversed = (reversed * 10) + (x % 10);
    x = Math.floor(x / 10);
  }

  // Compare the reversed number to the original
  return reversed === original;
}