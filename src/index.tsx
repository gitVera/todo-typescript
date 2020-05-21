import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';
import * as serviceWorker from './serviceWorker';
import WithTasksData from './HOCs/withTasksData';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <WithTasksData><App/></WithTasksData>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
