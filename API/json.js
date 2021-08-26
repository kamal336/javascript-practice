// // stringify data for send to server 
const myDetails = {
    name : 'akter kamal',
    age: 30,
    address: 'Cox`s Bazar',
    language: ['bangla','korean','english','hindi']
}
console.log(myDetails);

const stringified = JSON.stringify(myDetails);
console.log(stringified);

// convert stringify to parse data 
const converParse = JSON.parse(stringified);
console.log(converParse);

// takeout json data from server 
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

const addData =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}


// load user from server / takeout big json data from server 
document.getElementById('load-data').addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => displayUsers(users));
});

const displayUsers = (users) =>{
    const ul = document.getElementById('users');
    console.log(users)
     for(const user of users){
         const li = document.createElement('li');
         li.innerHTML = `Id: ${user.id} Name: ${user.name} Email: ${user.email}`;

         ul.appendChild(li);
     }
}

// load post 
const loadPost =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => console.log(posts));
}

// POST method 






