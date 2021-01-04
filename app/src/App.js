import React from 'react';
import { store }  from './redux/drivers/store';
import { Provider } from 'react-redux'

import './App.css';
import F1Drivers from './components/F1Drivers';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <F1Drivers />
      </div>
    </Provider>
  );
}

export default App;
