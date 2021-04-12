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
function minesweeper(/* matrix */) {
  throw new Error('Not implemented');
  // let i = 0;
  // let j = 0;
  // let result = matrix.slice();
  // for (i, j; i < matrix.length; i++) {
  //   while (j < matrix[i].length) {
  //     if (matrix[i][j] === true) {
  //       if (result[i - 1][j - 1] !== undefined) {
  //         result[i - 1][j - 1] += 1;
  //       }
  //       if (result[i - 1][j] !== undefined) {
  //         result[i - 1][j] += 1;
  //       }
  //       if (result[i - 1][j + 1] !== undefined) {
  //         result[i - 1][j + 1] += 1;
  //       }
  //       if (result[i][j - 1] !== undefined) {
  //         result[i][j - 1] += 1;
  //       }
  //       if (result[i][j + 1] !== undefined) {
  //         result[i][j + 1] += 1;
  //       }
  //       if (result[i + 1][j - 1] !== undefined) {
  //         result[i + 1][j - 1] += 1;
  //       }
  //       if (result[i + 1][j] !== undefined) {
  //         result[i + 1][j] += 1;
  //       }
  //       if (result[i + 1][j + 1] !== undefined) {
  //         result[i + 1][j + 1] += 1;
  //       }
  //       j++;
  //     }
  //   }
  // }
}

module.exports = minesweeper;
