function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true.";
    }
    return "No, that was false.";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

// === statement
function compareEquality(a,b){
    if (a === b){
        return "Equal.";
    }
    return "Not Equal.";
}
console.log(compareEquality(5,"5"));