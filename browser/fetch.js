// fetch is a asynchronous function
console.log('My first first line')
console.log('My first second line')
setTimeout(()=>{
    for(let i = 0; i <= 4000; i++){
        console.log(i)
    }
},2000);
console.log('My first third line')
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('My first fourth line')
console.log('My first fifth line')
