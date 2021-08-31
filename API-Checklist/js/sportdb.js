const loadSports =()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
    .then(res => res.json())
    .then(data => displaySportTeams(data.teams))
}

const displaySportTeams = teams =>{
    // console.log(teams)
    const teamsDiv = document.getElementById('teams');
    teamsDiv.textContent = '';

    for(const team of teams){
      // console.log(team)

      const div = document.createElement('div');
      div.classList.add('col')
      div.innerHTML = `
      <div class="col"> 
         <div onclick="loadTeam(${team.idTeam})" class="card">
         <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
         <div class="card-body">
         <h3 class="card-title">${team.strAlternate}</h3>
         <p class="card-text">${team.strDescriptionEN.slice(0,100)}.</p>
      </div>
      </div>
      </div>
      `
      teamsDiv.appendChild(div)
    }
}

const loadTeam = idTeam =>{
   const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
   fetch(url)
   .then(res=> res.json())
   .then(data => displaySingleTeam(data.teams[0]))

}

const displaySingleTeam = team =>{
    const teamDetails = document.getElementById('team-details');
    teamDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <div class="col">
    <div class="card w-50 mx-auto my-4">
    <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-info">${team.strAlternate}</h5>
    <p class="card-text text-success">${team.strDescriptionEN.slice(0,150)}.</p>
    <a href="#" class="btn btn-primary text-center">You Tube</a>
    </div>
  </div>
  </div>
    `
    teamDetails.appendChild(div)
}