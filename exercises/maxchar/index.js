// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = {};
    str.split('').forEach(c => {
        map[c] = map[c] + 1 || 1;
    });
    let max;
    let maxVal = 0;

    /* Object.entries(map).forEach(([key, val]) => {
        max = val > maxVal ? key : max;
        maxVal = val;
    }); */

    for(let char in map) {
        if(map[char] > maxVal){
            max = char;
            maxVal = map[char];
        }
    }
    return max;
}

module.exports = maxChar;
