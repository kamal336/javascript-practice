// closure 
function stopWatch (){
    let counter = 0;
    return function(){
        counter++;
       return counter;
    }
}
let clock = stopWatch()

console.log(clock())

function myName ( name ){
   return function(){
    return  name;

   }
}

const nameVar = myName('naim')
console.log(nameVar())

const ParenFunction = () =>{
     let myValue = 0;
   return function (){
        myValue++;
        
        return myValue;
     }
   
}

let pFunc = ParenFunction()
console.log(pFunc());