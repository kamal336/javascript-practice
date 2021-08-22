const players = document.getElementsByClassName('player');

for(const player of players){
   divStyle(player);
}

function divStyle(player){
    player.style.color = 'white';
    player.style.border = '2px solid goldenrod';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '10px';
    player.style.backgroundColor = 'cadetblue';
}

function addElement(){
    const mainDiv = document.getElementById('players');
    const div = document.createElement('div');
    div.classList.add('player');
    div.innerHTML = `<div class="player"><h2>New Player</h2>
    <p>Enim mollitia labore libero aliquam ratione maiores, quasi error sit? Iusto perspiciatis debitis commodi, laborum est quam magnam eveniet saepe nisi eaque fugiat sapiente cum corrupti iste modi ut deleniti minus. Alias hic ipsam quam deleniti voluptas, asperiores incidunt! Laborum.</p>`;


    mainDiv.appendChild(div);

}

document.getElementById('players').addEventListener("click",function(e){   
 e.target.parentNode.style.backgroundColor = 'gray';

})