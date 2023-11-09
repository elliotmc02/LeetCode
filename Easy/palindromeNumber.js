/**
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */

var isPalindrome = function (x) {
    // return [...x.toString()].reverse().join("") == x.toString();
    return Array.from(String(x), Number).reverse().join("") == x;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));