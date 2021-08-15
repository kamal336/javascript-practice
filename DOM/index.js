// getElementById method
let heading = document.getElementById('heading-title');

heading.style.color = 'goldenrod';
heading.style.fontSize = '2rem';
heading.style.border = '2px solid ';
heading.style.textAlign = 'center';
heading.style.padding = '10px';
heading.style.borderRadius = '15px';
heading.style.margin = '10px';

// get element querySelctor
let paraSelect = document.querySelector('.para');

paraSelect.style.color = 'blue';
paraSelect.style.fontSize = '1.3rem';
paraSelect.style.margin = '10px';

// select element tag name 
let blogTitle = document.getElementsByTagName('h2');

for(const title of blogTitle){
    title.style.color = 'orange';
    title.style.fontSize = '1.9rem';
}

// getElementByClassName

const blogs = document.getElementsByClassName('blog');

for(const blog of blogs){
    blog.style.margin = '15px';
}

// get element by querySelectorAll
const blogPara = document.querySelectorAll('.blog-para');

for(const para of blogPara){
    para.style.color = 'green';
    para.style.fontSize = '1.2rem';
}

// create Element
let p = document.createElement('p');

p.innerText = 'This is my first create html element by using javascript';

let topHeading = document.getElementById('top-heading');
topHeading.appendChild(p);

let p2 = document.createElement('p');

p2.innerText = 'My awesome paragraph 2';

topHeading.appendChild(p2)
let p3 = document.createElement('p');

p3.innerText = 'My awesome paragraph 3';

topHeading.appendChild(p3)
let h3 = document.createElement('h3');

h3.innerText = 'My awesome heading 3';

topHeading.appendChild(h3)


