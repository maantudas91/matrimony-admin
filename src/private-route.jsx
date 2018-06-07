import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => { 
    console.log(rest)
    return (
    
    <Route
      {...rest}
      render={props =>{
        //console.log(rest);
        return rest.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location }
            }}
          />
        )
      }
      }
    />
  )
  };

  export default PrivateRoute;