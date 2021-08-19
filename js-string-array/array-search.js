const friends = ['koli','tyab','mother','father','akter Kamal','anwar','kamal'];
let mother = [];
for(const friend of friends){
    if(friend.indexOf('mother') != -1){
      mother.push(friend);
      console.log(mother);
    }
}

function largestNumber(friends){
    let newFriend =  friends[0];
    for(let friend of friends){
        if(friend.length > newFriend.length ){
             newFriend = friend;
        }
    }
    return newFriend;
}

console.log(largestNumber(friends));

const anthem = 'amar sonar bangla ami tomay valobashi';
console.log(anthem);

const splitMethod = anthem.split(' ');
console.log(splitMethod);

const sliceMethod = anthem.slice(5,11);
console.log(sliceMethod);