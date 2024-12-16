// import logo from './logo.svg';
import {Link, Route} from 'react-router-dom'
import './App.css';
import MainPageComponent from './components/main-page.component';
import OtherPage from './components/other-page.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className='App-title'>Fibonacci Number</h1>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={MainPageComponent} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </div>
  );
}

export default App;
