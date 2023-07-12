var myArr1 = [];
var i = 0;

while(i<5){
    myArr1.push(i);
    //console.log(myArr1);
    i++;
}
console.log("\n");

var myArr2 = [];
for(var j = 0; j<5; j++){
    myArr2.push(j);
    //console.log(myArr2);
}

//odd numbers
var myArr3 = [];

for(var k = 0; k<=10 ; k += 2){
    myArr3.push(k);
    //console.log(myArr3);
}

var myArr4 = [];
for(var l = 9; l >= 0; l -= 2){
    myArr4.push(l);
    console.log(myArr4);
}