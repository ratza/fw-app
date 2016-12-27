import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/reducer_main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'


let store = createStore(
  allReducers
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
