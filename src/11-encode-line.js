/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  const work = str.split('');
  let count = 1;
  for (let i = 0; i < work.length; i++) {
    if (work[i] === work[i + 1]) {
      count++;
      work.shift();
      i--;
    } else {
      if (count === 1) {
        result.push(work[i]);
      } else {
        result.push(count);
        result.push(work[i]);
      }
      count = 1;
    }
  } return result.join('');
}

module.exports = encodeLine;
