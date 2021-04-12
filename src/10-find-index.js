/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const arr = array;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) return i;
  }
  return 0;
}

module.exports = findIndex;
