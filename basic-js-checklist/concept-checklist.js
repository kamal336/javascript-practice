// variable declaration // which variable can change value or which variable can not change value
let name = 'Akter Kamal'; // it can change value
const age = 30; // const can not change value
let isStudent = false;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

name = 'Naim';
console.log(name);

// arightmatic operator 
const addNumber =(num1,num2)=>{
    let sum = num1 + num2;
    return sum;
}

console.log('Sum =',addNumber(22,33));

const substractionNumber = (num1,num2)=>{
    let substraction = num1 + num2;
    return substraction;
}
console.log('Substraction =',substractionNumber(43,21));

const multiplyNumber =(num1,num2,num3)=>{
    let multiplication = num1 * num2*num3;
    return multiplication;
}
console.log('Multiplication =',multiplyNumber(5,7,4));

const divistionNumber =(num1,num2)=>{
    let division = num1 / num2;
    return division;
}

console.log('Division =',divistionNumber(55,5));

// compare two variable or number
let compareNumber = (number1, number2)=>{
     if (number1 == 0 && number2 == 0) {
        return 'Input number is 0.';
    }
    else if (number1 >= number2) {
        return 'Number 1 is big';
    }else if (number1 <= number2) {
        return 'Number 2 is big';
    }
    else{
        return 'This is not a number';
    }
}

console.log(compareNumber(1,33));

// logical && and logical ||
const logicalAnd =(num1, num2)=>{
    if(num1 > num2 && num1 > 0){
        return 'Number 1 is bigger';
    }else if(num1 < num2 && num2 != 0){
        return 'Number 2 is bigger';
    }else{
        return 'This is not a number';
    }
}
console.log(logicalAnd(22,211));

// if one condition true it will return true but if two condition false it return false
const logicalOr =(num1,num2)=>{
    if(num1 > 0 || num2 > 0){
        return 'Number1 is a positive value.';
    }else{
       return 'Number2 is a negative value.';
    }
}

console.log(logicalOr(2,-3));

// while loop get odd number
let i = 7;

while (i <= 19) {
    i++;
    if(i % 2 != 0){
        console.log('Odd number', i)
    }
}

let x = 4;

while (x <= 19) {
    x++;
    if(x % 2 == 0){
        console.log('Even number', x)
    }
}

// Array
let friends = ['naim','akter','koli','jannatul','kamal','saiful'];
console.log(friends);

friends[3] = 'tyab';
console.log(friends);

friends.push('s islam','iman abdullah');
console.log(friends);

friends.pop();
console.log(friends);

// for loop or for of loop
let koreanFriends = ['wasim','abdullah','iman','rasel'];

for(let i = 0; i< koreanFriends.length; i++){
    console.log(koreanFriends[i])
}

let families = ['abbu','ammu','wife','brother','sister'];

for(let family of families){
    console.log(family);
}

// more loop and condition 
let numbers = [32,44,77,98,33,66,88,101];

for(let number of numbers){
    if(number > 80){
        console.log(number)
    }
}

// change the Object property value 
let student1 = {
    name: 'akter kamal',
    age: 30,
    id: 101
}
console.log(student1);

student1.name = 'naim';
console.log(student1);

student1.age = 27;
console.log(student1);


// get largest srinp from array 
function bestFriend(arr){
    var longest = arr[0];
    for(var f = 0; f< arr.length; f++ ){
        var item = arr[f];
       if(item.length > longest.length){
           longest = item;
       }
    }
    return longest;
}

console.log(bestFriend(['akter','naim','jannatul']))


// in a loop when come negative value it will break
const positiveNumber =(numbers)=>{
    let newNumbers = [];
   for(let number of numbers){
       if(number > 0){
        newNumbers.push(number);
       }else{
           break;
       }
   }
   return newNumbers;
}
console.log(positiveNumber([9,4,-5,6,-4]))