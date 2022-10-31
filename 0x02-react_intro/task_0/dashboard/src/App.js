import holbertonLogo from './holbertonLogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo}  alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr></hr>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <hr></hr>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
