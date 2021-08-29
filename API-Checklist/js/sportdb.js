const loadSports =()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
    .then(res => res.json())
    .then(data => displaySportTeams(data.teams))
}

const displaySportTeams = teams =>{
    console.log(teams)
    const teamsDiv = document.getElementById('teams');
    teamsDiv.textContent = '';
    teams.forEach(team => {
        console.log(team)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
        <div onclick="loadTeam(${team.idTeam})"  class="card">
          <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${team.strAlternate}</h5>
            <p class="card-text">${team.strDescriptionEN}.</p>
          </div>
        </div>
      </div>
        `
        teamsDiv.appendChild(div)
    });
}

const loadTeam = teamId =>{
   const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${teamId}`
   console.log(url,teamId)
   fetch(url)
   .then(res => res.json())
   .then(data => console.log(data.team))
  
}