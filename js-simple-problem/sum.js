// loop sum
let numbers = [22,32,12,33,42,13,31];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
     sum = sum + numbers[i];
     console.log(sum);
}
console.log('Total sum =',sum);

// functional sum
let sumMarks = 0;
const totalMarks = (marks) =>{
    for(let x = 0; x < marks.length; x++){
       sumMarks += marks[x];
    }
    return sumMarks;
}
let marks = [44,33,24,56,65,43];
console.log('Total marks is',totalMarks(marks));

