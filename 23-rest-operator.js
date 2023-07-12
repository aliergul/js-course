/*
rest operator sayesinde örneğin verdiğimiz parametreleri toplamamıza yarayan bir fonksiyonda parametre sayısını istediğimiz gibi ayarlayabiliriz.
...args kullanımı ile istediğimiz kadar elemanı toplayabiliriz.
*/
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3));
console.log(sum(2,3,4,5,6,7,8));