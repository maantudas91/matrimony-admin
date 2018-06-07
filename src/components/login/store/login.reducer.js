import * as loginActions from './login.actions';

const initialLoginState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};

export default function loginReducer(state = initialLoginState, action) {
    switch (action.type) {
      case loginActions.SET_LOGIN_PENDING:
        return Object.assign({}, state, {
          isLoginPending: action.isLoginPending
        });
  
      case loginActions.SET_LOGIN_SUCCESS:
        return Object.assign({}, state, {
          isLoginSuccess: action.isLoginSuccess
        });
  
      case loginActions.SET_LOGIN_ERROR:
        return Object.assign({}, state, {
          loginError: action.loginError
        });
  
      default:
        return state;
    }
  }
  