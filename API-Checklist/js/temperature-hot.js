const searchWeatherCity =()=>{
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';
    const apiKey = 'c58dc4f29775002259daebf32fe669f6'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const displayWeather = weather =>{
    console.log(weather)
    const wheatherDiv = document.getElementById('wheather');
    wheatherDiv.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="">
    <h1>${weather.name}</h1>
    <h3><span>${weather.main.temp}</span>&deg;C</h3>
    <h1 class="lead">Clouds: ${weather.clouds.all}</h1>
    <p>Timezone: ${weather.timezone}</p>
    <p>Weather Type: ${weather.weather[0].description}</p>
    <p>Sunrise: ${weather.sys.sunrise}</p>
    <p>Sunset: ${weather.sys.sunset}</p>
    <p>Wind: ${weather.weather[0].icon}</p>
    `
    wheatherDiv.appendChild(div)
}
// ℃=K-273.15