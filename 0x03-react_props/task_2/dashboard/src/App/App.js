import React from "react";
import Notifications from '../Notifications/Notfifcations'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';


function App() {
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

export default App;
