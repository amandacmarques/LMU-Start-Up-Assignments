/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s) {
        return 0;
    }
    s = s.trim();
    var words = s.split(" ");
    var lastWord = words[words.length - 1];
    
    return lastWord.length;
};
