// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    /* let start = 0;
    let res = [];
    while(start < array.length) {
        let end = start + size;
        if(end > array.length) {
            end = array.length + 1;
        }
        res.push(array.slice(start, end));
        start+=size;
    }
    return res; */

    /* let chunked = [];
    for(let e of array) {
        let last = chunked[chunked.length - 1];
        if(!last || last.length === size) {
            chunked.push([e]);
        } else {
            last.push(e);
        }
    }
    return chunked; */

    const chunked = [];
    let index = 0;

    while( index < array.length){
        chunked.push(array.slice(index, index + size));
        index+=size;
    }
    return chunked;
}

module.exports = chunk;
