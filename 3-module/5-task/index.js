/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

    let res = str.split(' ').join(',').split(',').filter(function(number) {
 
        return !isNaN(Number(number));
    });
 
    return {min: Math.min(...res), max: Math.max(...res)};
 }

