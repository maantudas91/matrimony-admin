import {combineReducers} from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import loginReducer from './components/login/store/login.reducer';
import authReducer from './components/login/store/auth.reducer';
//import routing from './routing';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default combineReducers({
    routing: routerReducer,
    login : loginReducer,
    auth : authReducer
});

//export  rootReducer