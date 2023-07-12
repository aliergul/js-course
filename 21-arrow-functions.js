//example 1
const magic = () => new Date();

//example 2
const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

/*example 3 = filter fonksiyonu ile verdiğimiz arrayda integer ve pozitif olan sayıların karesini alan bir fonksiyon yazdık. 
arror function'dan yararlandık */
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);