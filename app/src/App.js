import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { store }  from './redux/store';
import { Provider } from 'react-redux';

import F1Standings from './components/F1Standings';
import F1Races from './components/F1Races';
import F1Car from './F1-Car-Racing.png'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav>
            <h1>Formula 1 Racing</h1>
            <div className='navlinks'>
              <Link to='/'>Home</Link>
              <Link to='/races'>Races</Link>
              <Link to='/standings'>Standings</Link>
            </div>  
          </nav>
          <img src={F1Car} width='500px'/>
          <Switch>
            <Route path='/races' component={F1Races} />
            <Route path='/standings' component={F1Standings} />
          </Switch>
          <p>Data provided by the <a href='http://ergast.com/mrd/'>Ergast Developer API</a></p>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
