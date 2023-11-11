/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
 */

var longestCommonPrefix = function (strs) {
    if (!strs.every(a => a.startsWith(strs[0][0]))) return "";
    const minLength = strs.reduce((a, b) => Math.min(a, b.length), Infinity);
    let prefix = strs[0][0];
    for (let i = 1; i < minLength; i++) {
        const chars = strs.map(a => a[i]);
        if (!chars.every(a => a == chars[0])) break;
        prefix += chars[0];
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));