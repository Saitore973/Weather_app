// current day and time code
let now= new Date();

let hour=now.getHours();
let minute = now.getMinutes();
let days = ['Tunday', 'Monday','Tueday','Wedday','Thurday','Friday','Saturday'];
let day=days[now.getDay()];

let currentTime = document.querySelector("#day-time");
currentTime.innerHTML = `${day} ${hour}:${minute}`;

// searched city code

 
function searchCity(event) {
  event.preventDefault();

  let currentCity = document.querySelector("#exampleCity");
  let cityCode = document.querySelector("#exampleInput");
  cityCode.innerHTML = currentCity.value;
  
};
let cityForm=document.querySelector("#exampleForm");
cityForm.addEventListener("submit",searchCity);

// interchange celcius and fahrenheit

function currentTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = "19";
  
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

// let city = prompt("Please enter a city");
// let apiKey = "fac714ae175c709753ea0304d9c0a29e";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

// function showTemperature(response) {
//   console.log(response.data);
//   let currentTemperature = Math.round(response.data.main.temp);
//   let h1 = document.querySelector("#core");
//   h1.innerHTML = `It is ${currentTemperature}°C in ${city}`;
// }

// axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

