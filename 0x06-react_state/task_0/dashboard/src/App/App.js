import React from "react";
import Notifications from '../Notifications/Notfifcations'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";


const listCourses = [
  {id: 1,name: 'ES6', credit: 60 },
  {id: 2,name: 'Webpack', credit: 20 },
  {id: 3,name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

const styles = StyleSheet.create({
  app: {
    textAlign: 'center'
  },

  hr: {
    width: '100%',
    height: 3,
    fontSize: 'larger',
    backgroundColor: 'rgb(204, 44, 44)',
    border: 0,
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.state = {displayDrawer: false};
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  handleKeyCombination(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyCombination);
  }

  render() {
    if(!this.props.isLoggedIn) {
      return (
      <React.Fragment>
        <Notifications
         listNotifications={listNotifications}
         displayDrawer={this.state.displayDrawer}
         handleDisplayDrawer={this.handleDisplayDrawer}
         handleHideDrawer={this.handleHideDrawer} />
        <div className={css(styles.app)}>
          <Header />
          <hr className={css(styles.hr)}></hr>
          <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum</p>
          </BodySection>
          <hr className={css(styles.hr)}></hr>
          <Footer />
        </div>
      </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
        <Notifications listNotifications= {listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          <hr className={css(styles.hr)}></hr>
          <div className="App-body">
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses}/>
            </BodySectionWithMarginBottom>
            
          </div>
          <BodySection title="News from the School">
          <p>Some Random Text</p>
          </BodySection>
          <hr className={css(styles.hr)}></hr>
          <Footer />
        </div>
        </React.Fragment>
      )
    }
  }
  
}



App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;
