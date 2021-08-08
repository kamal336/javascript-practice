// larget number 
function largestNumber(numbers){
    var largest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i];
        if(number > largest){
            largest = number;
        }
    }
    return largest;
}

var numbers = [22,32,11,34,6,66];
console.log(largestNumber(numbers));

// get the smallest number
const smallNumber =(numbers)=>{
    let smallest = numbers[0];
   for(let num of numbers){
    if(num < smallest){
        smallest = num;
    }

   }
   return smallest;
}

console.log(smallNumber(numbers));