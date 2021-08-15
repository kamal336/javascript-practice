function myFun2(){
    document.body.style.backgroundColor = 'blue';
}

let makeGreen = document.getElementById('greenBtn');

makeGreen.onclick = myFun3;
function myFun3(){
    document.body.style.backgroundColor = 'green';
}


let makeOrange = document.querySelector('.orangeBtn');

makeOrange.onclick = myFunOrange;

function myFunOrange(){
    document.body.style.backgroundColor = 'orange';
}

let makeCadetBlue = document.getElementById('CadetBlueBtn');

makeCadetBlue.addEventListener('click',function(){
    document.body.style.backgroundColor = 'cadetblue';
})

let clickMe = document.querySelector('.click');

clickMe.addEventListener('click',function(){
    let text = this.innerHTML;
    let dislpay = document.getElementById('demo');
    dislpay.innerHTML = text + ' is click';
    
})


