import { shaloow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
    shallow(<Footer />);
})

it('renders the text copyright', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.getFooterCopy(false)).toBe('Copyright');
});