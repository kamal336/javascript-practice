const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>displayCountries(data))
}

const displayCountries = (countries) =>{
   const countryContainer = document.getElementById('countries')
//    console.log(name,flag,capital)
   const countryHTML = countries.map(country => countryDetails(country));
    countryContainer.innerHTML = countryHTML.join('');
    console.log(countryHTML)

}

const countryDetails = country =>{
    const {name,capital,flag} = country;
    return  `
       <div class="country">
       <img src="${flag}">
       <h3>Name: ${name}</h3>
       <p>Capital: ${capital}</p>
       </div>
    `
}

loadCountries();