import Dashboard from '../../../../views/dashboard/Dashboard';
import Details from '../../../../views/details/Details';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ReactTestRenderer from 'react-test-renderer';
import DetailsExtraInfo from '../../../../views/details/components/DetailsExtraInfo';


describe('DetailsExtraInfo', () => {
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
            initialEntries: ["/", "/details/test"],
            initialIndex: 1,

        });
        wrapper = (object) => (<RouterProvider router={router}>{object}</RouterProvider>);
    })

    test(' should be defined', () => {
        expect(DetailsExtraInfo).toBeDefined();
    });


    test(' should render', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<DetailsExtraInfo />));

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount();
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(wrapper(<DetailsExtraInfo />));

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });
})