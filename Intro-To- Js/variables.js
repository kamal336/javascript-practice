// variable

var name = "Akter Kamal";
console.log(name);
name = typeof(name);
console.log(name);

var number = 23;

console.log(number);
number = typeof(number);
console.log(number);

// string to convert integer and float

var num1 = "3.12334";
var num2 = "4.535535";

num1 = parseInt(num1);
console.log(num1);

num2 = parseFloat(num2);
console.log(num2);


// tofixed and toprecision
num2 = num2.toFixed(3);
console.log("To Fixed = " + num2);


var num3 = 5.344425;
num3 = num3.toPrecision(4);
console.log("To Precision = "+ num3);




