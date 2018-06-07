export const AuthService = {
    doLogin,
    doSocialLogin,
    register,
    doLogout,
    authorize
}

/*  Login function
*   params username, password
*/

function doLogin(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
 
    return fetch('/users/authenticate', requestOptions)
        .then(response => {
            // if (!response.ok) {
            //     return Promise.reject(response.statusText);
            // }

            if (response.statusCode === 404) {
                return Promise.reject('There are some errror');
            }
 
            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
 
            return user;
        });
}

function doSocialLogin(payload) {
    const payloadLength = Object.keys(payload);
    if(payloadLength <= 0){
        return Promise.reject('There are some errror');
    }else{
        if( payload._profile && payload._provider ){
            const profile = payload._profile;
            localStorage.setItem('user', JSON.stringify(profile));
            localStorage.setItem('provider', payload._provider);
            return Promise.resolve(payload);
        }
    }
}


function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
 
    return fetch('/users/register', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
 
    return response.json();
}




function doLogout(){
    return Promise.resolve().then(function () {
        localStorage.removeItem('provider');
        localStorage.removeItem('user');
    });
}


function authorize(){
    if(localStorage.getItem('provider') && localStorage.getItem('user')){
        return Promise.resolve(localStorage.getItem('user'));
    }else{
        return Promise.reject(new Error('unauthorized'));
    }
}

