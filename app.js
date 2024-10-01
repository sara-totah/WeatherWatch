// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = '99848a4fce152fd6a880240616b8f717';
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city.");
    }
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            updateWeatherInfo(data);
            changeBackgroundColor(data.weather[0].main);
        })
        .catch(error => {
            alert('City not found');
        });
}

function updateWeatherInfo(data) {
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

function changeBackgroundColor(weather) {
    const weatherCondition = weather.toLowerCase();
    let backgroundColor;

    switch (weatherCondition) {
        case 'clear':
            backgroundColor = '#FFD700'; // Sunny
            break;
        case 'clouds':
            backgroundColor = '#B0C4DE'; // Cloudy
            break;
        case 'rain':
            backgroundColor = '#778899'; // Rainy
            break;
        case 'snow':
            backgroundColor = '#F0FFFF'; // Snowy
            break;
        default:
            backgroundColor = '#87CEFA'; // Default sky color
    }

    document.body.style.backgroundColor = backgroundColor;
}
