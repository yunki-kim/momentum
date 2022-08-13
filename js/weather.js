const API_KEY = "2b79394d9c2036ea4da40c1a3dd48145";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp.toFixed(
        1
      )}℃`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can`t find you. No weather for you.");
  weather.innerText = "Can`t find you.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
