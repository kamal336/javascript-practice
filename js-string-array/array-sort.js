// sort Array numbers
const numbers = [10,3,44,33,1,4,23,12,2];
console.log(numbers);

const sortedNumbers = numbers.sort((a,b)=>{
    return a - b;
});
console.log(sortedNumbers);

// reverse numbers Array
const reverseNumbers = numbers.reverse((b,a)=>{
    return b - a;
});
console.log(reverseNumbers);


// sort string Array 
const friends = ['naim','kamal','akter','wife','babu','jannatul'];
console.log(friends);

const sortedFriend = friends.sort();
console.log(sortedFriend);

// reverse Array
const revarseFriend = friends.reverse();
console.log(revarseFriend);