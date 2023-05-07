const weatherCard = document.querySelector('.weather-card');
const cityName = document.getElementById('city');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

async function getWeather(location){
    try{
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=b39abc9b9360493b82290412232804&q=${location}`,
            {
            mode: 'cors',
            }
        );
    
        const weatherData = await response.json();
        displayData(weatherData);
    }
    catch(e){
        alert("City name doesn't exist.");
    }
}

function displayData(data){
    initializeDataInfo(data);
    appendInfoToContainer();
}

function initializeDataInfo(data){
    cityName.innerHTML = data.location.name;
    temp.innerHTML = data.current.temp_c + " °C";
    feelsLike.innerHTML = "Feels like: " + data.current.feelslike_c + " °C";
    humidity.innerHTML = "Humidity: " + data.current.humidity + " %"
    wind.innerHTML = "Wind Speed: " + data.current.wind_kph + " km/h";
}

function appendInfoToContainer(){
    weatherCard.appendChild(cityName);
    weatherCard.appendChild(temp);
    weatherCard.appendChild(feelsLike);
    weatherCard.appendChild(humidity);
    weatherCard.appendChild(wind);
}

function handleSearch(){
    const searchButton = document.querySelector('.search');
    const input = document.querySelector('input');
    searchButton.addEventListener('click', () => {
        let location = input.value;
        getWeather(location);
        input.value = "";
    })
}

handleSearch();