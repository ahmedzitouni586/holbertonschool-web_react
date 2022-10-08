import './App.css';
import holbertonLogo from './holbertonLogo.jpg'
import './utils.js'
import { getFooterCopy, getFullYear } from './utils.js';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <img src={holbertonLogo} alt='holberton logo'/>
      <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <hr/>
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <hr/>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </footer>
    </div>
    
  );
}

export default App;
