/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    if (isNaN(salaries[key]) || salaries[key] == Infinity || salaries[key] == -Infinity) {
       delete salaries[key];
    } else if (typeof salaries[key] === 'number') {
      sum += salaries[key];
    }
   
  }
   return sum;
}

