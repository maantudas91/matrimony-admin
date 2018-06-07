import * as authActions from './auth.actions';
//import { browserHistory } from 'react-router';
import { withRouter } from "react-router-dom";

const initialAuthState = {
    isLoggedIn: false,
    user: null,
};

export default function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case authActions.GOOGLE_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn : true,
                user: action.user
            });

        case authActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn : true,
                user: action.user
            });
        
        case authActions.AUTHORIZED:
            return Object.assign({}, state, {
                isLoggedIn : true,
                user: action.user
            });
            
        case authActions.LOGIN_FAILURE:
            return initialAuthState;
        
        case authActions.GOOGLE_LOGIN_FAILURE:
            return initialAuthState;

        case authActions.LOGOUT_SUCCESS: {
            return initialAuthState;
        }
        default:
            return state;
    }
  }