// to declare a variable i have follow five thing such as

var myWife = 'Jannatul naim is my sweet, cute and pretty, loving wife. I love her very much.';
var marriedLife = 4;

console.log(myWife);
console.log('My married life is '+ marriedLife+'years.');

// Array recap (array is a collection of variables)
// to declare a Array
var names = ['naim','koli','kamal'];

console.log(names);

var ages = [27, 30, 28];
console.log(ages)

// Array push & pop  method
var myFriends = ['koli','anwar','tyab'];
console.log(myFriends);

myFriends.push('rafiq');
console.log(myFriends);

myFriends.push('naim');
console.log(myFriends);

// pop method

console.log(myFriends);

myFriends.pop();
console.log(myFriends);

myFriends.pop();
console.log(myFriends);

myFriends.pop();
console.log(myFriends);

// unshift method 
console.log(myFriends);

myFriends.unshift('tauhid');
console.log(myFriends);

myFriends.unshift('mohsin');
console.log(myFriends);

myFriends.unshift('saiful');
console.log(myFriends);

// shift method

console.log(myFriends);

myFriends.shift();
console.log(myFriends);

myFriends.shift();
console.log(myFriends);


// indexof or index findout and length
console.log(myFriends);

console.log(myFriends.length);

console.log(myFriends.indexOf('koli'));
console.log(myFriends[1]);
console.log(myFriends[0]);
console.log(myFriends[2]);

// sort method
var koreanFriends = ['rasel','iman ali','wasim', 'alam'];
console.log(koreanFriends);

koreanFriends.sort();
console.log(koreanFriends);

var friendAges = [31,33,24,30];
console.log(friendAges);

friendAges.sort();
console.log(friendAges);

// Array revarse method

console.log(koreanFriends);

koreanFriends.reverse();
console.log(koreanFriends);

friendAges.reverse();
console.log(friendAges);

// comparision condition
var haveMoney = 200;
var checkenPrice = 180;
var tshirtPrice = 290;


if(haveMoney > checkenPrice){
    console.log('Tahole ami morgir ran chababo');
}
else{
   console.log('Ami muri khabo');
}

if(haveMoney > tshirtPrice){
    console.log('ami oi new pore tshirt kinbo and potani marbo');
}
else{
    console.log('jeta ace seta dia potani marbo')
}

// nested conditional comparision
var headPhonePrice = 220;
var toothPast = 100;

if(haveMoney >= 200 ){
    if(headPhonePrice == haveMoney){
        console.log('ami headphone kine potani marbo');
    }
    else{
        console.log('ami toothpast kine dath mazbo....haa haa')
    }
}