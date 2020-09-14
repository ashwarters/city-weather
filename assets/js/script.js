//state variables for all ids from HTML

function getWeather() {

    var cityInput = document.getElementById("city-input").value;
    var clearHistory = document.getElementById("clear-history");
    var locationEl = document.getElementById("location");
    var temperatureEl = document.getElementById("temp");
    var currentHumidityEl = document.getElementById("humidity");4
    var currentWindEl = document.getElementById("wind-speed");
    var currentUVEl = document.getElementById("UV-index");
    var historyEl = document.getElementById("history");
    var searchHistory = JSON.parse(localStorage.getItem("search"));
//get API key!! 
    var APIKey = 'acbfd7b2295b7204f3d45c68878484ce'

//display weather with function and for/then
function displayWeather(location){
fetch(
    'api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=' + APIKey);
console.log(worked);
}
.then(function(response){
    return response.json();
})
.then(function(response){
    var responseContainerEl = document.querySelector('')
})
}
