let weather = {
    apiKey : "18891a0a1c606ac1f2f7d4e4b67c9f88",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&appid=" 
        +this.apiKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const tempcel = temp-273.15;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        
        document.querySelector(".temp").innerText = tempcel + "°C";
        document.querySelector(".cloudorsun").innerText = description;
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";  
      },
    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".btn").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})

