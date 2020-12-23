/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  let clone = Object.assign({}, salaries);
  for (const key in clone) {
  if (typeof clone[key] === 'number' && Number.isFinite(clone[key])) {
      sum += clone[key];
    }
  }
   return sum;
}
