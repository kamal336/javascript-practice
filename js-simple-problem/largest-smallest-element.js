// get largest number from Array
const largestElement =(numbers)=>{
      let largest = 0;
      for(let i = 0; i <numbers.length; i++){
          let element = numbers[i];
          if ( element > largest) {
              largest = element;
          }
      }
      return largest;
}
let numbers = [33,22,42,56,21,34];
console.log('Largest number is',largestElement(numbers));

// get smallest from Array
let smallestNumber = (smNumbers) => {
    let smallestNumber = smNumbers[0];
    for(let x = 0; x < smNumbers.length; x++){
        let smElement = smNumbers[x];
        if (smElement < smallestNumber) {
           smallestNumber = smElement ;
        }
    }
    return smallestNumber;
}
let smNumbers = [42,3,44,32,21,32,4];
console.log('Smallest number is',smallestNumber(smNumbers));


// get largest number
const oldestPerson = (ages) =>{
    let oldest = 0;
    for(let i = 0; i < ages.length; i++){
        if (ages[i] > oldest) {
            oldest = ages[i];
        }
    }
    return oldest;
}
let ages = [23,9,43,11,34,21];
console.log('The oldest persion is',oldestPerson(ages),'year.');

// get lowest number
const lowestMark = (marks) =>{
    let lowest = marks[0];
    for(let x = 0; x < marks.length; x++){
        let mark = marks[x];
        if(mark < lowest){
            lowest = mark;
        }
    }
    return lowest;
}
let marks = [20,13,66,8,3,22];
console.log('Lowest mark is',lowestMark(marks));