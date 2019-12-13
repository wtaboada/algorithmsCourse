// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    /* const reversed = str.split('').reverse().join('');
    return str === reversed; */

    /* return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    }) */

    const lim = Math.ceil(str.length/2);
    for(let i = 0; i < lim; i++) {
       if(str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
}

module.exports = palindrome;
