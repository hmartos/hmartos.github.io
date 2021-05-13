import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate HoC receive the t function as a prop
    withTranslation: () => Component => {
        // eslint-disable-next-line no-param-reassign
        Component.defaultProps = { ...Component.defaultProps, t: () => '' };
        return Component;
    },
    Trans: ({ children }) => children,
}));
