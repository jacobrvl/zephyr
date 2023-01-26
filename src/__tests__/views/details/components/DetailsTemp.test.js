import ReactTestRenderer from 'react-test-renderer';
import DetailsTemp from '../../../../views/details/components/DetailsTemp';


jest.mock("react-router-dom");

describe('DetailsTemp', () => {
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
        expect(DetailsTemp).toBeDefined();
    });


    test(' should render', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsTemp weatherData={testWeatherData} units="metric" />);

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount();
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsTemp weatherData={testWeatherData} units="metric" />);

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });

    test( ' should show the state from the weather data', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsTemp weatherData={testWeatherData} units="metric" />);

        expect(testRenderer.toJSON().children[0].children[0].children[0]).toBe("Drizzle");
    })

    test( ' should show the temp from the weather data', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsTemp weatherData={testWeatherData} units="metric" />);

        expect(testRenderer.toJSON().children[1].children[0].children[0]).toBe("2");
    })

    test( ' should show the low from the weather data', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsTemp weatherData={testWeatherData} units="metric" />);

        expect(testRenderer.toJSON().children[2].children[0].children[1]).toBe("1");
    })

    test( ' should show the high from the weather data', () => {
        const testRenderer = ReactTestRenderer.create(<DetailsTemp weatherData={testWeatherData} units="metric" />);

        expect(testRenderer.toJSON().children[3].children[0].children[1]).toBe("3");
    })
})