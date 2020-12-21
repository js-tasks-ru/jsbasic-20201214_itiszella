/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  if (str.toLowerCase().includes('1xBet'.toLowerCase()) || str.toUpperCase().includes('XXX')) {
    return true;
  } 

  return false;
}
