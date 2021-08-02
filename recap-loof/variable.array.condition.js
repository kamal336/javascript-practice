// variable
var myLove = 'Jannatul Naim';
var lovingYr = 6;

console.log(`I Love my wife ${myLove}`);
console.log('We Loving together for '+ lovingYr +' years.');

// Array
var myFamily = ['naim','father','mother'];
var agesFamilyMember = [51,27,60];

console.log(myFamily);
console.log(agesFamilyMember);

// adding a element to the end by push method
myFamily.push('brothers');
console.log(myFamily);

agesFamilyMember.push(33);
console.log(agesFamilyMember);

// adding a element to the beginning of the array by unshift method
myFamily.unshift('sisters');
console.log(myFamily);

agesFamilyMember.unshift(25);
console.log(agesFamilyMember);

//remove a element from the end of the array by pop method
myFamily.pop();
console.log(myFamily);

agesFamilyMember.pop();
console.log(agesFamilyMember);

//remove a element from the beginning of the array by pop method
myFamily.shift();
console.log(myFamily);

agesFamilyMember.shift();
console.log(agesFamilyMember);

// condition 
var myFriends = ['naim','koli','saiful','tyab','rigan'];

if(myFriends.length == 4){
    console.log('Tahole Kacakaci Kotao berate Jabo');
}else if(myFriends.length > 4){
    console.log('Tahole Dore Kotao berate jabo.');
}else{
    console.log('Basai party korbo and morog polao khabo.')
}

