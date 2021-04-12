/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const getSumOfDigits = (n) => {
  let strNumber = String(n);
  for (let i = 0; strNumber.length !== 1; i++) {
    const arr = strNumber.split('');
    strNumber = arr.reduce((acc, item) => acc + +item, 0).toString();
  }
  return +strNumber;
};

module.exports = getSumOfDigits;
