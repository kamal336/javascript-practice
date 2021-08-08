// add function
const addNumber = (num1, num2) =>{
    let sum = num1 + num2;
    return sum;
}

let addResult = addNumber(12,33);
console.log('Add result is', addResult);

// multiply function
const multiplyNumber = (num1,num2)=>{
    let multiplication = num1 * num2;
    return multiplication;
}
let multiplicationResult = multiplyNumber(8,5);
console.log('Multiplication result is',multiplicationResult);

// substraction function
let subNumber = (num1,num2)=>{
    let substraction = num1 - num2;
    return substraction;
}
let substractionResult = subNumber(44,23);
console.log('Substraction result is',substractionResult);

// division function
function divNumber (x,y){
    var division = x / y;
    return division;
}
var divisionResult = divNumber(55,11);
console.log('Division result is',divisionResult);