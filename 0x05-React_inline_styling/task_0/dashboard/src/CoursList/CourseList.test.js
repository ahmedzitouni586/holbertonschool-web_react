import { shallow } from "enzyme";
import CourseList from "./CourseList";

it('renders without crashing', () => {
    shallow(<CourseList />);
});

it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('th').length).toBe(3);
    expect(wrapper.find('td').length).toBe(2);
})