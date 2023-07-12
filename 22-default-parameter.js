/*default parameter yapısı sayesinde (value = 1 şekinde sağlandı) eğer fonksiyona tek parametre yollarsak,
increment değerini default olarak 1 kabul ediyor. Eğer 2 parametre yollarsak da ikisini topluyor.
*/
const increment = (function() {
    return function increment(number, value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(6));