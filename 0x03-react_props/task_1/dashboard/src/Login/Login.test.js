import { shallow } from 'enzyme';
import Login from './Login';

it('renders without crashing', () => {
    shallow(<Login />);
})

it('renders 2 inputs and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
})