// load countries 
const loadCountries =()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries =>{
    console.log(countries)
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('myCountry');
        div.innerHTML = `
        <h3>Name: ${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="countryByName('${country.name}')">Details</button>
        `
        countryDiv.appendChild(div)
    });
}

const countryByName = name =>{
    console.log(name)
    const url = (`https://restcountries.eu/rest/v2/name/${name}`)
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data))
}

const displayDetails = details =>{
    console.log(details)
    const detailsDiv = document.getElementById('details');
    detailsDiv.textContent = '';
    details.forEach(detail => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img width="350" height="200" src = ${detail.flag} >
        <h3>Name: ${detail.name}</h3>
        <p>Region: ${detail.region}</p>
        `
        detailsDiv.appendChild(div)
    });
}