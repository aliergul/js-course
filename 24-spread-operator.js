/* 6.satırdaki spread operatörü sayesinde arr1 ile arr2'yi eşitlerken arr1'in içindeki elemanları kullanarak arr2 adında yeni bir array oluşturduk.
Aksi halde arr1[0]='potato' ifadesinden sonra arr2'nin ilk elemanı da potato olacaktı.
*/
const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);