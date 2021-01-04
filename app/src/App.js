import React from 'react';
import { store }  from './redux/store';
import { Provider } from 'react-redux'

import './App.css';
import F1Standings from './components/F1Standings';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <F1Standings />
        <p>Data provided by the <a href='http://ergast.com/mrd/'>Ergast Developer API</a></p>
      </div>
    </Provider>
  );
}

export default App;
