import { shallow } from 'enzyme';
import App from './App';

describe('it renders without crashing', () => {
    it("check if app renders without craching", () => {
        const wrapper = shallow(<App />)
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.exists())
    })
    it("render div with class app-header", () => {
        const wrapper = shallow(<App />)
        wrapper.update()
        expect(wrapper.find('div.App-header')).toHaveLength(1);;
    })

    it("render div with class app-body", () => {
        const wrapper = shallow(<App />)
        wrapper.update()
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    })

    it("render div with class app-footer", () => {
        const wrapper = shallow(<App />)
        wrapper.update()
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    })
})