// show slide 
const images = [
    'images/pexels-6.jpg',
    'images/pexels-1.jpg',
    'images/pexels-2.jpg',
    'images/pexels-4.jpg',
    'images/pexels-5.jpg',
    'images/pexels-8.jpg',
    'images/pexels-9.jpg'
]

const showImg = document.getElementById('images');

let imgIndex = 0;
// set interval 
setInterval(()=>{
  
  if(imgIndex >=images.length){
     imgIndex = 0; 
  }
  const imgUrl = images[imgIndex];
  
//   console.log(imgUrl,imgIndex)

  showImg.setAttribute('src',imgUrl);
  imgIndex++;

},2000)