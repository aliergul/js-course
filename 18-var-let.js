function checkScope(){
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("Block scope i is:" + i);
    }
    console.log("Function scope i is:" + i);
    return i;
}
checkScope();

function checkScope2(){
    var i = "function scope";
    if(true){
        var i = "block scope";
        console.log("Block scope i is:" + i);
    }
    console.log("Function scope i is:" + i);
    return i;
}
checkScope2();

//const is read-only