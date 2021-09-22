const data = document.querySelector('.data');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const key = '357dc6bc6eef2894e1e0977f88f5082f';

const getWeather = async (city) => {
	const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

	const response = await fetch(base);
	const data = await response.json();
	console.log(data);
	const { weather, main, name } = data;

	h1.textContent = name;
	h2.textContent = main.temp - 273;
	p.textContent = weather[0].description;

	// console.log(weather, main);

	// console.log(weather[0].description, Math.round(main.temp - 273.15) + ' C');
};

getWeather('london');
