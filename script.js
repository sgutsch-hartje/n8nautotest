const apiKey = 'YOUR_API_KEY';
function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('City not found');
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('condition').textContent = data.weather[0].description;
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
}