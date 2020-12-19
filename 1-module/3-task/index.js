/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let newStr = '';
  if (!str) return str;
  return newStr = str[0].toUpperCase() + str.slice(1);
  // ваш код...
}
