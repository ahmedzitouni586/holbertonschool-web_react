import holbertonLogo from './holbertonLogo.jpg';
import './App.css';
import {getFooterCopy, getFullYear} from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>School dashboard</h1>
        <img src={holbertonLogo}  alt="logo" />
      </header>
      <hr></hr>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id='email'></input>
        <label htmlFor='password'>Password: </label>
        <input type="password" id='password'></input>
        <button>OK</button>
      </div>
      <hr></hr>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
