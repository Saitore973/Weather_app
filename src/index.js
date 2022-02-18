// current day and time code
let now= new Date();

let hour=now.getHours();
let minute = now.getMinutes();
let days = ['Tunday', 'Monday','Tueday','Wedday','Thurday','Friday','Saturday'];
let day=days[now.getDay()];

let currentTime = document.querySelector("#day-time");
currentTime.innerHTML = `${day} ${hour}:${minute}`;

// searched city code

function showTemperature(response) {
  document.querySelector("#exampleInput").innerHTML = response.data.name;
  document.querySelector("#tempfah").innerHTML = Math.round(response.data.main.temp);

  
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

// interchange celcius and fahrenheit

function currentTemp(event) {
  event.preventDefault();
  // let temperature = document.querySelector("#temp");
  // temperature.innerHTML = "19";
  
};
let temp = document.querySelector("#celsius");
temp.addEventListener("click", currentTemp)

function currentFah(event) {
  event.preventDefault();
  let temperatur = document.querySelector("#tempfah");
  temperatur.innerHTML = "66 ";
}
let fahre = document.querySelector("#Fahrenheit");
fahre.addEventListener("click", currentFah);


function displayComment(response) {
  console.log(response.data[0].comment);
}

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




