const API_KEY = `bd4ea33ecf905116d12af172e008dbae`;
let generateUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
let generateImgUrl = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

let kelvinToCelsius = (k) => (k - 272.15).toFixed(2);

let glb = "";
const inp = document.getElementById("inp");
document.getElementById("inpBtn").addEventListener("click", (e) => {
  console.log("BBBB");
  if (inp.value) getWeatherData(inp.value);
});

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const desc = document.getElementById("desc");

async function getWeatherData(city) {
  let res = await fetch(generateUrl(city));

  if (res.ok) updateUI(await res.json());
}

function updateUI(data) {
  glb = data;
  console.log(data);
  city.innerText = `Weather in ${data.name}`;
  temp.innerText = `${kelvinToCelsius(data.main.temp)} °C`;
  icon.src = generateImgUrl(data.weather[0].icon);
  desc.innerText = data.weather[0].description;
}
