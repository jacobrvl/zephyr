import ReactTestRenderer from 'react-test-renderer';
import DetailsExtraInfo from '../../../../views/details/components/DetailsExtraInfo';


jest.mock("react-router-dom");

describe('DetailsExtraInfo', () => {
    let testWeatherData;

    beforeEach(() => {


        testWeatherData = {
            "coord": {
                "lon": 4.9041,
                "lat": 52.3676
            },
            "weather": [
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",
                    "icon": "09n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 2.16,
                "feels_like": -0.98,
                "temp_min": 0.52,
                "temp_max": 2.74,
                "pressure": 1034,
                "humidity": 90
            },
            "visibility": 10000,
            "wind": {
                "speed": 3.09,
                "deg": 20
            },
            "clouds": {
                "all": 75
            },
            "dt": 1674412664,
            "sys": {
                "type": 2,
                "id": 2046553,
                "country": "NL",
                "sunrise": 1674372971,
                "sunset": 1674403629
            },
            "timezone": 3600,
            "id": 2759794,
            "name": "Amsterdam",
            "cod": 200
        }
    })

    test(' should be defined', () => {
        expect(DetailsExtraInfo).toBeDefined();
    });


    test(' should render', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsExtraInfo weatherData={testWeatherData} />);

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount()
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsExtraInfo weatherData={testWeatherData} />);

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });
})