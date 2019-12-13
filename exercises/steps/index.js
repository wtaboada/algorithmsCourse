// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    /* for (let i = 0; i < n; i++) {
        const str = '#'.repeat(i + 1) + ' '.repeat(n - i - 1);
        console.log(str);
    } */

    /* for(let i = 0; i < n; i++) {
        let str = '';
        for(let j = 0; j < n; j++) {
            if(j <= i) {
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

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

module.exports = steps;
