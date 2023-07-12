function ourFunction(a,b){
    console.log(a-b);
}
ourFunction(5,2);

//local scope
function localScope(){
    var myVar = 5;
    console.log(myVar);
}
localScope();
//console.log(myVar); //only reach in the function

//global vs local scope////////
var outerWear = "T-shirt";
function myOutfit(){
    var outerWear = "Sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);
///////////////////////////////

