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
function getDNSStats(domains) {
  const res = {};
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.');
    let resStr = '';
    for (let y = arr.length - 1; y >= 0; y--) {
      resStr += arr[y];
      if (!res[resStr]) {
        res[resStr] = 1;
      } else {
        res[resStr]++;
      }
    }
  }
  return res;
}

module.exports = getDNSStats;
