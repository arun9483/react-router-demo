import React from 'react';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import store from './app/store';

import ContactHomePage from './feature/contact';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ContactHomePage />
      </Provider>
    </div>
  );
}

export default App;
