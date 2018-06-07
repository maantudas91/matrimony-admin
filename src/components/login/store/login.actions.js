

export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

export function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
};



// export function login(email, password) {
//     return dispatch => {
//       dispatch(setLoginPending(true));
//       dispatch(setLoginSuccess(false));
//       dispatch(setLoginError(null));

//       AuthService.login(email, password).then(user =>{
//           dispatch(setLoginPending(false));
//           dispatch(setLoginSuccess(true));
//       },
//       (error) => {
//             dispatch(setLoginPending(false));
//             dispatch(setLoginError(error));
//       });
//     }
//   }