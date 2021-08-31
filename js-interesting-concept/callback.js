const myCallBack = (name, callback) =>{
    name();
    return callback();
}

const callBack =()=>{
    console.log('Hi, I am call back function.')
}

const myWife =()=>{
    console.log('My wife name is Naim')
}

myCallBack(myWife,callBack)

// settimeout callBack function
const message1 = () =>{
    console.log('Hi, This my awesome callback function one-1')
} 

const message2 = () =>{
    console.log('Hi, This my awesome callback function two-2')
} 

const message3 = () =>{
    console.log('Hi, This my awesome callback function three-3')
} 

setTimeout(() => {
    message1();
}, 1000);

setTimeout(() => {
    message2();
}, 2000);

setTimeout(() => {
    message3();
}, 3000);