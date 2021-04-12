/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new Error('Not implemented');
  /* const result = [];
  // eslint-disable-next-line array-callback-return
  domains.map((item) => {
    // eslint-disable-next-line no-shadow,array-callback-return
    item.split('.').map((item) => {
      result.push(item);
    });
  });
  result.sort();
  let count = 1;
  const obj = {};
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1]) {
      count++;
      i--;
      result.shift();
    } else {
      obj[result[i]] = count;
      count = 1;
    }
  }
  return obj; */
}

module.exports = getDNSStats;
