// conver feet to inch 
const feetToInch = (feet) =>{
     let inch = feet * 12;
     return inch;
}

console.log('Inch =',feetToInch(4));

// convert inch to feet 
const inchToFeet =(inch)=>{
    let feet = inch / 12;
    return feet;
}

console.log('Feet =', inchToFeet(24));

// book print function
const paperRequirements =(book1,book2,book3)=>{
    const totalPaper = book1 + book2 + book3;
    return totalPaper;
}

const totalPaperRequires = paperRequirements(100,200,300);
console.log('Total paper lagbe =',totalPaperRequires,'pages');


// in a loop when come negative value it will break
let myNumbers = [3,9,7,-4,5,2];
let newNumbers = [];
for(let myNumber of myNumbers){
    if(myNumber > 0){
     newNumbers.push(myNumber);
    }else{
        break;
    }
}
console.log(newNumbers);

// find best friend or big name from a array

const bestFriend =(friends)=>{
    let largeName = friends[0];
    for(let i = 0; i< friends.length; i++){
       let friend = friends[i];
        if(friend.length > largeName.length){
            largeName = friend;
        }
    }
    return largeName;
}

let friends = ['koli','akter','jannatul naim','kamal'];
let largeFriendName = bestFriend(friends);
console.log('Largest name is',largeFriendName);

// smallest string get from Array
const tinyFriend =(names)=>{
    let smallest = names[0];
    for(let name of names){
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}

console.log('Smallest name is',tinyFriend(['akter','saiful','naim','abdullah']));