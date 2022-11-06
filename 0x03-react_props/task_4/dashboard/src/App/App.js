import React from "react";
import Notifications from '../Notifications/Notfifcations'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";


function App(props) {
  const isLoggedIn = props.isLoggedIn;
  if(!isLoggedIn) {
    return (
    <React.Fragment>
      <Notifications />
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
      <Notifications />
      <div className="App">
        <Header />
        <hr></hr>
        <div className="App-body">
          <CourseList />
        </div>
        <hr></hr>
        <Footer />
      </div>
      </React.Fragment>
    )
  }
  
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
