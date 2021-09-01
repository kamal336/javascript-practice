// global variable
const err = document.getElementById('err');
const spinner = document.getElementById('spinner');

// event handler and load country 
document.getElementById('search-btn').addEventListener('click',function(){
    
    const searchField = document.getElementById('search-field');
    const search = searchField.value;
    // clear search field 
    
 
    // err handle search field
    if(search === ""){
       setTimeout(()=>{
        err.innerHTML = 'Please Enter a Country Name';
        spinner.classList.add('d-none');
       },800)
    }else{
        err.textContent = '';

    }
    // dynamically url set 
    const url = `https://restcountries.eu/rest/v2/name/${search}`;

    // add spinner 
    spinner.classList.remove('d-none');

  // fetch data 
    fetch(url)
    .then(res => res.json())
    .then(data =>{ 
        setTimeout(()=>{
        displayCountry(data)
        spinner.classList.add('d-none');
        },800)
    })
    .finally(()=>{
        searchField.value = '';
      
    })

})

const displayCountry = countries =>{
    // err handle if result not match 
    if(countries.message === "Not Found"){
        err.innerHTML = "Results Not Matched.";
        spinner.classList.add('d-none');
    }
    const countriesDiv = document.getElementById('countries');
    // clear div 
       countriesDiv.textContent = '';
        countries.forEach(country => {
        // dynamically add country 
        const div = document.createElement('div');
        div.classList.add('col-md-4')
        div.innerHTML = `
        <div class="col-md-4">
        <img class="w-100"  src="${country.flag}" alt="">
        <h2 class="my-2 text-success fw-bold">${country.name}</h2>
        <button onclick="showDetalis('${country.alpha2Code}')" class="btn-secondary">Show Details</button>
        </div>
        `
        countriesDiv.appendChild(div)
    });
}

const showDetalis = details =>{
    // url and fetch data 
    const url = `https://restcountries.eu/rest/v2/alpha/${details}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetail(data)) 
}

const countryDetail = detail =>{
    console.log(detail)
    const detailsDiv = document.getElementById('country-details');
    // div clear 
    detailsDiv.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col-md-12 fw-bold text-secondary">
    <h1 class="text-primary">${detail.name}</h1>
    <p class"">Capital: ${detail.capital}</p>
    <p>Population: ${detail.population}</p>
    <p>Language: ${detail.languages[0].name}</p>
    <p>Currencies: ${detail.currencies[0].name}  ${detail.currencies[0].symbol}</p>
  </div>
    `
    detailsDiv.appendChild(div)
}
