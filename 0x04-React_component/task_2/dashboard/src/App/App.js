import React from "react";
import Notifications from '../Notifications/Notfifcations'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";


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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
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
        <Notifications listNotifications= {listNotifications} />
        <div className="App">
          <Header />
          <hr></hr>
          <Login />
          <hr></hr>
          <Footer />
        </div>
      </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
        <Notifications listNotifications= {listNotifications} />
        <div className="App">
          <Header />
          <hr></hr>
          <div className="App-body">
            <CourseList listCourses={listCourses}/>
          </div>
          <hr></hr>
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
