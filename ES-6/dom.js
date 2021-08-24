document.getElementById('add-border').addEventListener('click',function(){

});

const addStyle =(item)=>{
   
    getStyle ()
}

function getStyle (item){
    const friends = document.getElementsByClassName('friend');
    for(item of friends){
        item.style.backgroundColor = 'cadetblue';
        item.style.padding = '10px';
        item.margin = '15px 0 10px 0';
        item.style.color = 'white';
        item.style.border = '3px solid goldenrod'
    }
}

document.getElementById('add-item').addEventListener('click',function(){
    const topDiv = document.getElementById('top-div');

    const div = document.createElement('div');
    div.classList.add('friend'); 
   div.innerHTML = `              
   <h2>New Friend</h2>
   <p>Omnis saepe, nulla dolorum eveniet tempora quae est quis iste, obcaecati sed minima vitae illum fugit mollitia. Odit, sit ipsa!</p>`

   topDiv.appendChild(div);
   console.log(div)
})