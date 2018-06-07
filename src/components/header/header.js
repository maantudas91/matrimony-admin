import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as authActions from '../login/store/auth.actions';

class Header extends Component{

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    componentWillMount(){
        this.props.dispatch(authActions.Authorize());
    }
    
    logout(e) {
        //this.props.onTemperatureChange(e.target.value);
        console.log(e);
        this.props.dispatch(authActions.Logout())
    }

    render(){
        return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                     Matrimony Admin
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavLink exact={true} activeClassName='active' className="nav-link" to="/">Home </NavLink></li>
                    <li className="nav-item"><NavLink activeClassName='active' className="nav-link" to="/contact">Contact</NavLink></li>
                    <li className="nav-item"><NavLink activeClassName='active' className="nav-link" to="/about">About</NavLink></li>
                
                    </ul>
                    {this.props.isLoggedIn ? (
                    <ul>
                        <li className="nav-item"><button className="btn btn-primary" onClick={this.logout}>Logout </button></li>
                    </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink activeClassName='active' className="nav-link" to="/auth/login">Login </NavLink></li>
                        </ul>
                    )}
                </div>
                </div>
            </nav>
        )
    }
}


// Header.propTypes = {
//     actions: PropTypes.object.isRequired
// }

function mapStateToProps(state, ownProps) {  
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(Header);