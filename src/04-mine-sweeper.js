/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = (matrix) => {
  const result = matrix.map((el, ind) => {
    const arr = [];
    for (let i = 0; i < el.length; i++) {
      if (el[i] === true) {
        arr[i] = 1;
      } else {
        let counter = 0;
        if (el[i - 1] === true) counter++;
        if (el[i + 1] === true) counter++;
        if (matrix[ind - 1]) {
          if (matrix[ind - 1][i] === true) counter++;
          if (matrix[ind - 1][i - 1] === true) counter++;
          if (matrix[ind - 1][i + 1] === true) counter++;
        }
        if (matrix[ind + 1]) {
          if (matrix[ind + 1][i - 1] === true) counter++;
          if (matrix[ind + 1][i] === true) counter++;
          if (matrix[ind + 1][i + 1] === true) counter++;
        }
        arr[i] = counter;
      }
    }
    return arr;
  });
  return result;
};

module.exports = minesweeper;
