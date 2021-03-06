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

function displayForcast(response) {
  console.log(response.data);
  let forecastWeather = response.data.daily;
  let forecast = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  forecastWeather.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `<div class="col">
                <div class="card icon ">
                    <p>
                        ${formatDay(forecastDay.dt)} <br>
                        <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"alt=""width="42"/> <br>
                        ${Math.round(forecastDay.temp.max)}°C   <em >  ${Math.round(forecastDay.temp.min)}°C </em>
                    </p>

                </div>
            </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecast.innerHTML = forecastHTML;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}



function showForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForcast);
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
  document.querySelector("#description").innerHTML = response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = `Wind Speed:${response.data.wind.speed}km/h`;

  convertTemperature = response.data.main.temp;

  showForecast(response.data.coord)

}


function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleCity").value;
  let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);

};


let cityForm = document.querySelector("#exampleForm");
cityForm.addEventListener("submit", searchCity);


// current city location code

function getPosition(position) {

  let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);

  console.log(apiUrl);

}

function currentLocation() {
  navigator.geolocation.getCurrentPosition(getPosition);
  console.log(currentLocation)
}

let button = document.querySelector("#btn");
btn.addEventListener("click", currentLocation);

// conversion to fahrenheit and celcius

function convertToFahrenheit(event) {
  event.preventDefault();
  let fahTemperature = (convertTemperature * 9) / 5 + 32;
  document.querySelector("#tempfah").innerHTML = Math.round(fahTemperature);
  // remove the active class from the celcious link
  celcius.classList.remove("active");
  fahrenheit.classList.add("active");
}

let convertTemperature = null;

let fahrenheit = document.querySelector("#Fahrenheit");
fahrenheit.addEventListener("click", convertToFahrenheit);

function convertToCelcius(event) {
  event.preventDefault();
  let celTemperature = document.querySelector("#tempfah");
  celTemperature.innerHTML = Math.round(convertTemperature);
  celcius.classList.add("active");
  fahrenheit.classList.remove("active");
}

let celcius = document.querySelector("#celsius");
celcius.addEventListener("click", convertToCelcius);



// nairobi weather

function naiWeather(event) {
  event.preventDefault();

  let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);

  console.log(apiUrl);
}

let Nairobi = document.querySelector("#nai");
nai.addEventListener("click", naiWeather);



// cape town weather

function capeWeather(event) {
  event.preventDefault();

  let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cape Town&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);



}

let Capetown = document.querySelector("#cape");
cape.addEventListener("click", capeWeather);




// new york weather

function newWeather(event) {
  event.preventDefault();

  let apiKey = "82ed732deaa09964f901cdd99d4ce9a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);

}

let Newyork = document.querySelector("#newy");
newy.addEventListener("click", newWeather);