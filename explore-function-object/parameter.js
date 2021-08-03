// function parameter

// single parameter (we can pass a single in function)

function myLove (love){
    console.log('I love',love)
}

myLove('Jannatul Naim'); //function call 

// multiple parameter

function mobilePrice(iphone,symphony){
    return iphone + symphony;
}

var iphone = 47000;
var symphony =9999;
var totalPrice = mobilePrice(iphone,symphony);
console.log('Total price of iphone and symphony', totalPrice,'taka');

// addition function
var n1 = 20;
var n2 = 10;

function addNumbers(num1,num2){
     var sum = num1 + num2;
     return sum;        
}

var totalNumber = addNumbers(n1,n2);
console.log('Sum total is',totalNumber);

// substraction function
function subNumbers(num1,num2){
    var sub = num1 - num2;
    return sub;        
}

var subTotal = subNumbers(n1,n2);
console.log('Sub total is',subTotal);

// multiplication function
function multiplyNumber(num1,num2){
    var mul = num1 * num2;
    return mul;
}

var multiplyTotal = multiplyNumber(n1,n2);
console.log('Multiplication total is', multiplyTotal)

// division function
function devideNumber (num1,num2){
   var division = num1 / num2;
   return division;
}

var dividedTotal = devideNumber(n1,n2);
console.log('Devided total is',dividedTotal);

// modulus function
var n3 = 7;

function modulusNumber(num1,num2){
   var modulus = num1 % num2;
   return modulus;
}

var modulusResult = modulusNumber(n1,n3);
console.log('Modulus result is', modulusResult);