import Dashboard from '../../../../views/dashboard/Dashboard';
import Details from '../../../../views/details/Details';
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router-dom';
import ReactTestRenderer from 'react-test-renderer';
import DetailsTemp from '../../../../views/details/components/DetailsTemp';

jest.mock("react-router-dom");


describe('DetailsTemp', () => {
    let testWeatherData;
    let wrapper;
    beforeEach(() => {

        useLocation.mockReturnValue({
            state: {
                location: {name: test, lon: 4.9041, lat: 52.3676},
                units: 'metric',
            }
        })

        const routes = [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/details/test",
                element: <Details />,
            },
        ]

        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/details/test"],
            initialIndex: 1,

        });
        wrapper = (object) => (<RouterProvider router={router}>{object}</RouterProvider>);

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
        const testRenderer = ReactTestRenderer.create(wrapper(<DetailsTemp weatherData={testWeatherData} units="metric" />));

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount();
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<DetailsTemp weatherData={testWeatherData} units="metric" />));

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });
})