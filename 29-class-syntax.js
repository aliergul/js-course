function makeClass(){
    class Vegatable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegatable;
}
const Vegatable = makeClass();
const carrot = new Vegatable ('Carrot');
console.log(carrot.name);