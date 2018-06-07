import React from 'react';
import { Link } from 'react-router-dom';
import SocialButton from './SocialButton';
import { connect } from 'react-redux';
import { login, socialLogin } from '../../components/login/store/auth.actions';

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = { username: '', password: ''};
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSocialLogin = this.handleSocialLogin.bind(this);
        this.handleSocialLoginFailure  = this.handleSocialLoginFailure.bind(this);
    }


    componentWillReceiveProps(newProps){
        console.log(newProps);
        // if(newProps.user){
        //     console.log(this.props.history);
        //     this.props.history.push('/');
        // }
    }

    handleSocialLogin(user){
        //console.log(user);
        this.props.socialLogin(user);
    }

    handleSocialLoginFailure(err){
        //console.log(err);
        this.props.socialLogin(err);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
 
    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password);
        this.setState({ username: '', password: ''});
    }

    render() {
        let { isLoginPending, isLoginSuccess, loginError} = this.props;
        let { username, password } = this.state;

       return (
        <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
            {/* <div className={'form-group' + (submitted && !username ? ' has-error' : '')}> */}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                {/* {submitted && !username &&
                    <div className="help-block">Username is required</div>
                } */}
            </div>
            {/* <div className={'form-group' + (submitted && !password ? ' has-error' : '')}> */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                {/* {submitted && !password &&
                    <div className="help-block">Password is required</div>
                } */}
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
                {isLoginPending &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loader"/>
                }

                {/* { isLoginPending && <div>Please wait...</div> } */}
        { isLoginSuccess && <div>Success.</div> }
        { loginError && <div>{loginError.message}</div> }

                <Link to="/auth/signup" className="btn btn-link">Register</Link>
                

                <SocialButton
                    provider='google'
                    appId='985878765021-shdghnial80kp4ppa6ujgtsdv2p30vo6.apps.googleusercontent.com'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >Login with Google</SocialButton>
            </div>
        </form>
    </div>
       )
    }
 }

 const mapStateToProps = (state) => {
    return {
      isLoginPending: state.login.isLoginPending,
      isLoginSuccess: state.login.isLoginSuccess,
      loginError: state.login.loginError,
      user : state.auth.user
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (username, password) => dispatch(login(username, password)),
      socialLogin : payload => dispatch(socialLogin(payload))
    };
  }

 export default connect(mapStateToProps, mapDispatchToProps)(Login);