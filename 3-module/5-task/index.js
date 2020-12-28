/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

   let result = {};

   let res = str.split(' ').join(',').split(',').filter(function(number) {

       return !isNaN(Number(number));
   });

   result.min = Math.min(...res);
   result.max = Math.max(...res);
   
   return result;
}

