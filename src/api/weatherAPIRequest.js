import { API_KEY } from '../config';


function weatherAPIRequest(location, units) {
    // check if location things are not undefined
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=${units}`

    return fetch(url).then((response) => response.json());
}

export default weatherAPIRequest;