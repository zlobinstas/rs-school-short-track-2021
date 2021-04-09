/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  arr.forEach((item) => {
    // eslint-disable-next-line eqeqeq
    if (item != '-1') {
      result.push(item);
    }
  });
  result.sort((a, b) => a - b);
  // eslint-disable-next-line array-callback-return
  arr.map((item, index) => {
    // eslint-disable-next-line eqeqeq
    if (item == '-1') {
      result.splice(index, 0, -1);
    }
  });
  return result;
}

module.exports = sortByHeight;
