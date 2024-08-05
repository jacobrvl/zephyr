import '@testing-library/jest-dom';

import Dashboard from '../../../views/dashboard/Dashboard';
import Details from '../../../views/details/Details';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ReactTestRenderer from 'react-test-renderer';
import { useGeolocated } from 'react-geolocated';


jest.mock("react-geolocated");

describe('Dashboard', () => {
    let wrapper;
    beforeEach(() => {

        useGeolocated.mockReturnValue({
            "coords":  {latitude: 52.3698486, longitude: 4.8939246},
            "timestamp": 1674412975527,
            "isGeolocationEnabled": true,
            "isGeolocationAvailable": true
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
            initialEntries: ["/"],
            initialIndex: 0,
        });
        wrapper = (object) => (<RouterProvider router={router}>{object}</RouterProvider>);
    })

    test(' should be defined', () => {
        expect(Dashboard).toBeDefined();
    });


    test(' should render', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<Dashboard />));

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount();
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<Dashboard />));

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });

});
