import './App.css';
import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CoursList/CourseList';

function App() {
  if(!props.isLoggedIn) {
    return (
      <React.Fragment>
        <Notifications />
        <div className='App'>
          <Header />
        </div>
        <div className='App-body'>
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>
        <Notifications />
        <div className='App'>
          <Header />
        </div>
        <div className='App-body'>
          <CourseList />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};


export default App;