function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero" 
}
console.log(checkSign(5));
console.log(checkSign(-1));
console.log(checkSign(0));