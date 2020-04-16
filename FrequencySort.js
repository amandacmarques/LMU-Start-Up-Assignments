/**
 * @param {string} s The string to have its characters sorted by frequency.
 * @return {string} A string with its characters sorted by frequency.
 */
var frequencySort = function(s) {
    let frequency = {};
    let chars = s.split("");
    let arrOfFrequencies = [];
    let sortedArrOfFrequencies = [];
    let resultArray;
    
    for (let i = 0; i < chars.length; i++) {
        let letter = chars[i]
        if (frequency[letter]) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }
    
    arrOfFrequencies = Object.entries(frequency);
    sortedArrOfFrequencies = arrOfFrequencies.sort((a, b) => a[1] - b[1]);
    resultArray = sortedArrOfFrequencies.map((array) => {
        let letter = array[0];
        let letterFrequency = frequency[letter];
        let resultString = "";
        
        for (let i = 0; i < letterFrequency; i++) {
            resultString = resultString + letter;
        }
        
        return resultString;
    });
    resultArray = resultArray.reverse();
    return resultArray.join('');
};
