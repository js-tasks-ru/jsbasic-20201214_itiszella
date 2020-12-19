/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let newStr = '';
  if (str.length > maxlength) return newStr = str.slice(0, maxlength - 1) + "…";
  return str;
  // ваш код...
}
