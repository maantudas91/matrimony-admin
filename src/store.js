import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import { createLogger }  from 'redux-logger';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//export const history = createHistory();



const logger = createLogger();

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware, promise, logger),
  ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)


export const history = syncHistoryWithStore(
  createHistory(),
  store,
);

export default store;