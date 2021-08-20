const addNumbers = (num1,num2) =>{
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;
    }
    return sum;
}
console.log(addNumbers(44,33,22,11))