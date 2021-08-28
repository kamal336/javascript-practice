// country api call 
const loadCountries =()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries =>{
    // console.log(countries)
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        // console.log(country.name,country.population)
        const div = document.createElement('div');
        div.classList.add('myCountry')
        div.innerHTML = `
        <h3>Name: ${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="countryDetails('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div)
    });
}

const countryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data));
}

const displayDetails = details =>{
    console.log(details)
    const countryDiv = document.getElementById('details');
    details.forEach(detail => {
        const div = document.createElement('div');
        div.innerHTML = `
         <h4>Name: ${detail.name}</h4>
         <p>Population: ${detail.population}</p>
         <img width ="350" height="230" src = '${detail.flag}'>
        `
        countryDiv.appendChild(div)
    });
}