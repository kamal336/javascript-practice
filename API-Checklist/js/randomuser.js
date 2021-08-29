const loadUsers =()=>{
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}

loadUsers();


const displayUser = users =>{
    console.log(users)
    const userDiv = document.getElementById('users');
    
    users.forEach(user => {
        const div = document.createElement('div')
     
        
        div.innerHTML = `
        <div  class="col-lg-7 mx-auto">
        <div class="p-3 border bg-light text-center">
           <img class="rounded-circle my-5 " src= ${user.picture.thumbnail}>
           <h3 class="text-info fw-bold">Name: ${user.name.first} ${user.name.last}</h3>
           <p class="text-warning fw-bold">Email: ${user.email}</p>
           <h4 class="text-primary fw-bold">Location</h4>
           <p class="text-primary fw-bold">Street: ${user.location.street.name} City: ${user.location.city} Coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}</p>
           <p class="text-secondary fw-bold">Timezone: ${user.location.timezone.description}</p>
        </div>
        </div>
        `
        userDiv.appendChild(div)
    });
}
