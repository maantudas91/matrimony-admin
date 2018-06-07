import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import PrivateRoute from './private-route';
import {connect} from 'react-redux';



class App extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
          <Header />
         
          <div className="container">
            <Switch>    
                <Route exact path='/' component={Home}/>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/signup" component={Signup}/>
                <Redirect path="/auth" to="/auth/login" />
                <Route path='/about' component={Signup}/>
                <Route path='/contact' component={Signup}/>
                <PrivateRoute isLoggedIn={false} path='/dashboard' component={Dashboard}/>
                <Redirect path="*" to="/" />
            </Switch>
          </div>
        </div>
    )
  }

}




function mapStateToProps(state, ownProps) {  
  return {
      isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);