import { API_KEY } from '../config';


function getLocationCoordinates(city) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    return fetchRequest(url);
}

function getWeatherData(location, units) {
    if (location?.lat === undefined || location?.lon === undefined) {
        return Promise.reject("lat or lon not defined");
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=${units}`;
    return fetchRequest(url)
}

function fetchRequest(url) {
    return fetch(url).then((response) => response.json());
}

export { getLocationCoordinates, getWeatherData, fetchRequest };