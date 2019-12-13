// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    /* const vowelsMap = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1
    }
    let totalVowels = 0;

    for(let c of str) {
        if(vowelsMap[c.toLowerCase()]) {
            totalVowels++;
        }
    }

    return totalVowels; */

    /* let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for(let c of str.toLowerCase()) {
        if(checker.includes(c)) {
            count++;
        }
    }

    return count; */

    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
