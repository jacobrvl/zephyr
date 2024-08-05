import '@testing-library/jest-dom';
import ReactTestRenderer from 'react-test-renderer';
import { useLocation } from 'react-router-dom';
import Details from '../../../views/details/Details';


jest.mock("react-router-dom");

describe('Details', () => {

    beforeEach(() => {

        useLocation.mockReturnValue({
            state: {
                location: {name: test, lon: 4.9041, lat: 52.3676},
                units: 'metric',
            }
        })

    })

    test(' should be defined', () => {
        expect(Details).toBeDefined();
    });


    test(' should render', () => {
        const testRenderer = ReactTestRenderer.create(<Details />);

        expect(testRenderer).toBeTruthy();
        testRenderer.unmount();
    });


    test(' should render as previous snapshot', () => {
        const testRenderer = ReactTestRenderer.create(<Details />);

        expect(testRenderer.toJSON()).toMatchSnapshot();

        testRenderer.unmount();
    });

});
