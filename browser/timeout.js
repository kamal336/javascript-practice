// asynchronous
const myFunc = ()=>{
    console.log('This is my function.')
}

const myFunc2 =()=>{
    console.log('Hi, this setTimeOut function.')
}
console.log('First: This is my first programme.')
console.log('second: This is my second programme.')
setTimeout(()=>{
    myFunc2();
},5000)
console.log('Third: This is my Third programme.')
// setTimeout(myFunc,3000)
setTimeout(()=>{
    myFunc()
},4000)
console.log('Fouth: This is my fourth programme.')
console.log('Fifth: This is my fifth programme.')

