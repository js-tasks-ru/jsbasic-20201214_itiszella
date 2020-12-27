/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, age){

  let res = users.filter(item => item.age <= age);
   
  return res.map((item, index) => (index == res.length - 1)  ? `${item.name}, ${item.balance}`  : `${item.name}, ${item.balance}\n`).join('');
}