// current day and time code
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}


// searched city code

function showTemperature(response) {
  document.querySelector("#exampleInput").innerHTML = response.data.name;
  document.querySelector("#tempfah").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#day-time").innerHTML = formatDate(
    response.data.dt * 1000
  );
  document.querySelector("#exampleIcon").setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  document.querySelector("#description").innerHTML=response.data.weather[0].description;

  convertTemperature = response.data.main.temp;
  
}

 
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleCity").value;
  let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);
 
};


let cityForm=document.querySelector("#exampleForm");
cityForm.addEventListener("submit",searchCity);


// current city location code

function getPosition(position){

let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
 
console.log(apiUrl);

}

function currentLocation(){
navigator.geolocation.getCurrentPosition(getPosition);
console.log(currentLocation)
}

let button = document.querySelector("#btn");
btn.addEventListener("click",currentLocation);

// conversion to fahrenheit and celcius

function convertToFahrenheit(event){
  event.preventDefault();
  let fahTemperature =(convertTemperature*9)/5+32;
  document.querySelector("#tempfah").innerHTML=Math.round(fahTemperature);
  // remove the active class from the celcious link
  celcius.classList.remove("active");
  fahrenheit.classList.add("active");
}

let convertTemperature = null;

let fahrenheit = document.querySelector("#Fahrenheit");
fahrenheit.addEventListener("click",convertToFahrenheit);

function convertToCelcius(event) {
  event.preventDefault();
  let celTemperature = document.querySelector("#tempfah");
  celTemperature.innerHTML=Math.round(convertTemperature);
}

let celcius = document.querySelector("#celsius");
celcius.addEventListener("click", convertToCelcius);


