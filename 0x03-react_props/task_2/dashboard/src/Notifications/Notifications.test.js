import { shallow } from 'enzyme';
import Notifications from './Notfifcations'


describe('render of notifications', () => {
    it("notifcation exists", () => {
        const wrapper = shallow(<Notifications />)
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.exists()).to.equal(true);
    })

    it("Notifications renders Notification Item and first item has correct html", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems).toBeDefined();
        expect(listItems.first().html()).toEqual(
          '<li data-notification-type="default">New course available</li>'
        );
      });
})