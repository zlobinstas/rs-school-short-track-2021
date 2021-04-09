/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  for (let i = 0; i < String(n).length; i++) {
    result.push(String(n)[i]);
  }
  result.splice(result.indexOf(String(n).split('').sort()[0]), 1);
  return +result.join('');
}

module.exports = deleteDigit;
