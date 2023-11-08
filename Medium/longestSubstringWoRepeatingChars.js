/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */

var lengthOfLongestSubstring = function (s) {
    let substring = "";
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (!substring.includes(s[i])) {
            substring += s[i];
            maxLength = Math.max(maxLength, substring.length);
        } else {
            substring = substring.slice(substring.indexOf(s[i]) + 1);
        }
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));