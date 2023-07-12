//example 1
const person = {
    name: "Ali Ergül",
    age: 24
};
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;
console.log(greeting);

//example 2
const result = {
    success: ["max-length","no-amd","prefer-arrow-functions"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["id-blacklist","no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for (let i = 0; arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);