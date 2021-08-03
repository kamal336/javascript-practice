// to declare a object (1. var keyword 2. object name 3. ={} 4. object property: value 5. ,

var student1 = {
    name: 'naim',
    id: 102,
    cgpa: 4.30,
    husband : 'kamal',
    beautiful: 'yes! very beautiful'
}

student1.husband = 'akter'; // to set value or change value
student1['cgpa'] = 3.63;

var studentId = 'id';
student1[studentId] = 321;
console.log(student1);  // to print the objection
console.log(student1.beautiful) // to print the single value

var computer = {
    brand: 'hp',
    processor: 'intel i5',
    color: 'sliver',
    price: 55000,
    windows: 10
}

console.log(computer);
console.log('Brand Name : '+ computer.brand);

computer.price = 57000;
console.log('Computer price : ' + computer.price+ ' tk')

var userOf = 'windows';
computer[userOf] = 11;
console.log('User of windows: ' + computer.windows)