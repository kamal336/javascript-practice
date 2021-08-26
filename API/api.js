// to stringify data 
const products = {
    name: 'samsung mobile',
    price: 13000,
    color: 'black'
}
console.log(products);

const stringified = JSON.stringify(products);
console.log(stringified)

// to parse datat 
const convertParseData = JSON.parse(stringified);
console.log(convertParseData);

// load data 
const loadData =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(res => res.json())
     .then(data => console.log(data))
}

// load users 
const loadUsers = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

const displayUsers=(users,ps)=>{
    const usersContaier = document.getElementById('users');
    for(const user of users){
        const div = document.createElement('div')
        div.classList.add('user');
        div.innerHTML = `<h3>${user.id} ${user.name} </h3>
        <p>${user.email}</p>`
        usersContaier.appendChild(div)
    }
    userStyle(ps);
}

const userStyle = () =>{
    const postClass = document.getElementsByClassName('user');
   for(const ps of postClass){
       ps.style.backgroundColor = 'green';
       ps.style.color = 'white';
       ps.style.padding = '14px';
       ps.style.margin = '10px';
       ps.style.border = '4px solid yellow';
       ps.style.borderRadius = '20px';
   }

}

// load comment 
const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=> res.json())
    .then(data => displayComment(data))
}

loadComment();

const displayComment=(comments,ps)=>{
    const commentsDiv = document.getElementById('comments');
    for(const comment of comments){
        const p = document.createElement('p');
        p.classList.add('user')
        p.innerHTML = `${comment.id} ${comment.email} ${comment.body}`
        commentsDiv.appendChild(p)
    }
    userStyle(ps);
}