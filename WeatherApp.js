let weather={
    "apiKey":"7a02e2f64891fea3d2276a3ef693d516",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=7a02e2f64891fea3d2276a3ef693d516")
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){
        const{name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML="Weather in " + name;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".humidity").innerHTML="Humidity:" + humidity + "%";
        document.querySelector(".wind").innerHTML="Wind Speed:" + speed + "km/hr";
    },
    search:function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

//Event Listeners
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector('.searchbar').addEventListener("keypress", function(event) {
  if (event.key === 'Enter') {
    weather.search();
  }
