import '@testing-library/jest-dom';
import Dashboard from '../../../../views/dashboard/Dashboard';
import Details from '../../../../views/details/Details';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ReactTestRenderer from 'react-test-renderer';
import WeatherBlock from '../../../../views/dashboard/components/WeatherBlock';

describe('WeatherBlock', () => {
    let wrapper;
    beforeEach(() => {

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
        expect(WeatherBlock).toBeDefined();
    });


    test(' should render', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<WeatherBlock />));

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount();
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<WeatherBlock />));

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });

});
