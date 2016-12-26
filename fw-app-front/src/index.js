import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/reducer_main';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


// const fwApp = function (state = {}, action) {
//   switch (action) {
//     default:
//       return state;
//   }
// }

let store = createStore(
  allReducers
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
