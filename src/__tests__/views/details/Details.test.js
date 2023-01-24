import '@testing-library/jest-dom';
import ReactTestRenderer from 'react-test-renderer';
import { createMemoryRouter, RouterProvider, useLocation } from 'react-router-dom';
import Details from '../../../views/details/Details';
import Dashboard from '../../../views/dashboard/Dashboard';


jest.mock("react-router-dom");

describe('Details', () => {
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
    })

    test(' should be defined', () => {
        expect(Details).toBeDefined();
    });


    test(' should render', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<Details />));

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount();
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<Details />));

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });

});
