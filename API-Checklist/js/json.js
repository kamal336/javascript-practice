// 1.fetch data from JSON Placeholder and console log 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


// comment API fetch show the console log 
const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayCommentByClick(data));
}
// load comment by without clicking 
// loadComment()

// 2. display Comment with button click 
const displayCommentByClick = comments =>{
    const commentDiv = document.getElementById('comments');
    
    (comments).forEach(comment => {
        const p = document.createElement('p');
        p.classList.add('comment');
        p.innerHTML = `
        <p>Id: ${comment.id} Name: ${comment.name}</p>
        <button onclick="showDetails(${comment.id})">Show Details</button>
        `
        commentDiv.appendChild(p)
    });
}

// show single data by clicking button 
const showDetails = commentId =>{
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data))
}
// dynamically add id 
const displayDetails = comment =>{
    console.log(comment)
    const showComment = document.getElementById('comment');
    const div = document.createElement('div');

    showComment.innerHTML = `
    <h3>ID: ${comment.id} Name: ${comment.name}</h3>
    <p>Email: ${comment.email} Body: ${comment.body}</p>
    `

    showComment.appendChild(div)
}

