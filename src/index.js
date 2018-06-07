import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
//import { createStore, applyMiddleware } from 'redux';
//import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
//import thunkMiddleware from 'redux-thunk';
//import promise from 'redux-promise';
//import { createLogger }  from 'redux-logger';
//import allReducers from './reducer';
import store, { history } from './store';
import { ConnectedRouter  } from 'react-router-redux';
//import { createHistory } from 'history';
//import routing from 'reducers/routing';


// logger middleware
//const logger = createLogger();

// creating store here
// const store = createStore(
//   allReducers,
//   applyMiddleware(thunkMiddleware, promise, logger)
// );

// const history = createHistory();


// const history = syncHistoryWithStore(
//   createHistory(),
//   store,
// );

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      
        <App />
    
    </Router>
  </Provider>
), document.getElementById('root'))

registerServiceWorker();
