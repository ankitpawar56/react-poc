import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Provider store = {store} >
            <Routes />
        </Provider>
  );
}

export default App;
