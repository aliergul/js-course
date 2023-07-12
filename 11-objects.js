var testObj = {
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats",
};

hatValue = testObj.hat;
shirtValue = testObj.shirt;
console.log(hatValue,shirtValue);

var hat = testObj["hat"];
var shirt = testObj["shirt"];
console.log(hat,shirt);

testObj.hat = "cap";
console.log(testObj)

//adding new attribute
var myDog = {
    "name":"Alex",
    "legs":4,
    "tails":1,
    "friends":["masuk","diego"]
};
myDog.bark = "woof!";
myDog['bark']="hav";
console.log(myDog.bark);
console.log(myDog);

//deleting attribute
delete myDog.legs;
console.log(myDog);