import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import ViewportProvider from "./components/util/ViewportProvider";
import Welcome from './components/Welcome';
import Calendar from './components/Calendar';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ViewportProvider>
      <Router>
        <div className="App">
          <header>
            <ul className="App-menu">
              <li className="route">
                <Link className="App-link" to="/">Home</Link>
              </li>
              <li className="route">
                <Link className="App-link" to="/calendar">Calendar</Link>
              </li>
            </ul>
            <Route exact path='/' component={Welcome}></Route> 
            <Route exact path='/calendar' component={Calendar}></Route> 
          </header>
        </div>
      </Router>
    </ViewportProvider>
  );
}

export default App;
