import logo from './logo.svg';
import './App.css';
import Routes from "./Routes"
import { BrowserRouter as Router } from "react-router-dom";
import  BrowserHistory  from './BrowserHistory';


function App() {
  return (
    <div className="App">
      <Router history={BrowserHistory}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
