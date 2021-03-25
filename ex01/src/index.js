const array1 = ['MON', 'TUE', 'WED, FRI'];
function main(arr)
{


let array2 = [...array1];

return array2;

} 
console.log(main(array1));
module.exports = main;