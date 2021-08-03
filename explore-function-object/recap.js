// variable
var myLove = 'Jannatul Naim';
console.log(myLove + ' is my love.');

var age = 27;
console.log('She is '+ age + ' years old.')

// Array
var myFriends = ['naim','koli','saiful'];
console.log(myFriends);

myFriends[1] = 'dewan';
console.log(myFriends);

myFriends.push('tyab');
console.log(myFriends);

myFriends.pop();
console.log(myFriends);

myFriends.shift();
console.log(myFriends);

myFriends.unshift('anwar');
console.log(myFriends);

// conditional
var koreanFriends = ['abdullah','wasim','rasel'];

if(koreanFriends[1] == 'abdullah'){
    console.log('I will go jejudu with him and enjoy.')
}else{
    console.log('Kotao jamona basai bose muri khamo.')
}

// loop

// while loop
var jejuduJabo = 1;

while (jejuduJabo < 4) {
    console.log('gia masti korbo day '+ jejuduJabo);
    jejuduJabo++;
}

console.log('Tarpor basai fire asbo.');

// for loop

for(var coxbazarJabo = 1; coxbazarJabo < 7; coxbazarJabo++){
    console.log('Coxs bazar gia masti korbo and gorbo day '+ coxbazarJabo);
}
