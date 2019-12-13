// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    /* for(let row = 0; row < n; row++) {
        let str = '';
        const colMax = n * 2 - 1;
        for(let col = 1; col <= colMax; col++) {
            if(col >= n - row && col <= n + row ) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    } */
    if (n === row) {
        return;
    }

    if ((n * 2 - 1) === stair.length) {
        console.log(stair);
        return pyramid(n, row + 1);
    }
    const midpoint = Math.floor((n * 2 - 1)/2);
    const add = stair.length >= midpoint - row && stair.length <= midpoint + row ? '#' : ' ';
    pyramid(n, row, stair + add);
}

module.exports = pyramid;
