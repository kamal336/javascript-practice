// load post 
const loadPost =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

loadPost();

const displayPost =(posts,ps)=>{
    const postContainer = document.getElementById('posts');

    posts.map(post =>{
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.id}. ${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div);

    })
  style(ps)
}

const style = () =>{
    const postClass = document.getElementsByClassName('post');
   for(const ps of postClass){
       ps.style.backgroundColor = 'green';
       ps.style.color = 'white';
       ps.style.padding = '14px';
       ps.style.margin = '10px';
       ps.style.border = '4px solid yellow';
       ps.style.borderRadius = '20px';
   }

}