//function kelimesini kullanmadan bir bisiklet objesi içerisinde dışarıdan vites değerini verdiğimiz bir özellik yazdık.
const bicycle = {
    gear:2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);