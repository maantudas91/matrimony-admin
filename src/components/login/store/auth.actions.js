import * as  loginActions from './login.actions';
import { AuthService } from './../../../services/authServices';


export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const GOOGLE_LOGIN = '[Auth] Google Login';
export const GOOGLE_LOGIN_SUCCESS = '[Auth] Google Login Success';
export const GOOGLE_LOGIN_FAILURE = '[Auth] Google Login Failure';
export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const AUTHORIZED = '[Auth] Authorized';


export function loginSuccess(user){
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function loginFailure(){
  return {
    type: LOGIN_FAILURE
  };
}


export function socialLoginSuccess(user){
  return {
    type: GOOGLE_LOGIN_SUCCESS,
    user
  };
}

export function socialLoginFailure(){
  return {
    type: GOOGLE_LOGIN_FAILURE
  };
}


export function logout_success(){
  return {
    type: LOGOUT_SUCCESS
  };
}


export function Authorized(user){
  return {
    type: AUTHORIZED,
    user
  };
}




export function login(email, password) {
  return dispatch => {
      dispatch(loginActions.setLoginPending(true));

      AuthService.doLogin(email, password).then(user =>{
        dispatch(loginActions.setLoginPending(false));
        dispatch(loginActions.setLoginSuccess(true));
        dispatch(loginSuccess(user));
      },
      (error) => {
            dispatch(loginActions.setLoginPending(false));
            dispatch(loginActions.setLoginError(error));
            dispatch(loginFailure())
      });
  }
}



export function socialLogin(payload) {
  return dispatch => {
      AuthService.doSocialLogin(payload).then(user => {
        //console.log(user)
        dispatch(socialLoginSuccess(user));
        
      },(err)=> {
        //console.log(err)
        dispatch(socialLoginFailure());
      });
  }
}


export function Logout(){
  return dispatch => {
    AuthService.doLogout().then(() =>{
      dispatch(logout_success());
    });
  }
}


export function Authorize(){
  return dispatch =>{
    AuthService.authorize().then((user)=>{
      dispatch(Authorized(user))
    }, (err)=>{
      //dispatch(loginFailure());
    });
  }
}