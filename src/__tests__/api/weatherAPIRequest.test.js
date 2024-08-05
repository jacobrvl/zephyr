import '@testing-library/jest-dom';
import { fetchRequest, getLocationCoordinates, getWeatherData } from '../../api/weatherAPIRequest';
import { API_KEY } from '../../config';


describe('weatherAPIRequest', () => {

    global.fetch = jest.fn();

    beforeEach(() => {
        fetch.mockReturnValue(
            Promise.resolve(new Response(JSON.stringify({test: 123})))
        )
    });

    test(' getLocationCoordinates should call fetch with str', () => {
        getLocationCoordinates('Test');

        expect(fetch)
            .toBeCalledWith(`https://api.openweathermap.org/geo/1.0/direct?q=Test&limit=1&appid=${API_KEY}`)
    });

    test(' getWeatherData should call fetch with str', () => {
        getWeatherData({name: test, lon: 10, lat: 5}, "metric");

        expect(fetch)
            .toBeCalledWith(`https://api.openweathermap.org/data/2.5/weather?lat=5&lon=10&appid=${API_KEY}&units=metric`)
    });

    test(' getWeatherData should return reject', () => {
        expect(
            getWeatherData({name: test, lon: undefined, lat: undefined}, "metric"))
            .rejects.toEqual("lat or lon not defined")

    });

    test(' fetchRequest should call fetch with str', () => {
        fetchRequest("www.test.com")
        expect(fetch).toBeCalledWith("www.test.com")

    });


});