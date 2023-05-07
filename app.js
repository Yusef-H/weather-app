

async function getWeather(location){
    try{
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=b39abc9b9360493b82290412232804&q=${location}`,
            {
            mode: 'cors',
            }
        );
    
        const weatherData = await response.json();
        displayData(weatherData);
    }
    catch(e){
        alert(e);
    }
}

function displayData(data){
    console.log(data);
    console.log(data.current.temp_c);

}


getWeather('Isfiya');