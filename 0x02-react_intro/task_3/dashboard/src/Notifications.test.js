import { shallow } from 'enzyme';
import Notifications from './Notfifcations'


describe('render of notifications', () => {
    it("notifcation exists", () => {
        const wrapper = shallow(<Notifications />)
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.exists())
    })

    it("expect to render 3 list item", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.update();
        expect(wrapper.find('li')).toHaveLength(3);
    })
    
    it("renders the text Here is the list of notifications", () => {
        const txt = "Here is the list of notifications"
        const wrapper = shallow(<Notifications />)
        wrapper.update();
        expect(wrapper.find(".Notifications p").text()).toEqual(txt)
    })
})