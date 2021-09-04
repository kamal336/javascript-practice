// compare Object 
const myObj1 = {
    name: 'kamal',
    age: 30,
    sex: 'male'
}

const myObj2 ={
    name: 'kamal',
    age: 30,
    sex: 'male'
}

// check by length 
if(Object.keys(myObj1).length === Object.keys(myObj2).length){
    console.log('Object are same.')
}else{
    console.log('Object are not same.')
}

// check by refenence set by myObj3 = myObj1 
const myObj3 = myObj1;

if(myObj1 === myObj3){
    console.log('Object are same')
}else{
    console.log('Not same')
}

// check by JSON.stringify setting 
if(JSON.stringify(myObj1) === JSON.stringify(myObj2)){
    console.log(true)
}else{
    console.log(false)
}