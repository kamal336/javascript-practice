// falsy value 
 let price = 10;

if(price){
    console.log('This is thruthy value')
}else{
    console.log('Falsy value')
}

if(null){
    console.log('truthy  value')
}else{
    console.log('falsy value')
}

let age = 22;
const myAge = age > 30 ? 'My age is right' : 'My age is to low';
console.log(myAge);

// logical && and logical ||
const num1 = 100;
const num2 = 40;
const num3 = 60;

if(num1> num2 && num1 > num3){
    console.log('Num1 is bigger')
}else{
    console.log('Num1 is smaller')
}

if(num1>num2 && num2> num3){
    console.log('num2 is bigger')
}else{
    console.log('num3 is bigger')
}

// logical or ||
if(num1>num2 || num2> num3){
    console.log('num1 is bigger')
}else{
    console.log('num3 is bigger')
}