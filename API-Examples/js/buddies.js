// load buddies 
const loadBuddies =()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayBuddies(data));
}

loadBuddies();

const displayBuddies = data =>{
    // console.log(data.results)
    const buddiesDiv = document.getElementById('buddies');
    const buddies = data.results;

    buddies.forEach(buddy => {
        console.log(buddy.gender,buddy.dob.date,buddy.dob.age,buddy.location.state)
        
         const p = document.createElement('p');
         p.innerHTML = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Age: ${buddy.dob.age} years, Email: ${buddy.email}  City: ${buddy.location.state}`;

         buddiesDiv.appendChild(p)
    });
}