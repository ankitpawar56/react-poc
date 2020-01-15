import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAPI } from '../../redux/actions';

class LoginComponent extends Component {
    componentDidUpdate() {
        (this.props.isLoggedIn) && this.props.history.push("/book");
        if(this.props.token) {
            localStorage.setItem('token', this.props.token)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        this.props.loginAPI({email, password});
    }
    // validateForm = () => {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }

    render() {
               return(
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <div  className="container"> 
                        <h2> Login </h2>
                            <input 
                                type = "email"
                                name = "email"
                                placeholder = "Email Address"
                            />
                            <input 
                                type = "password"
                                name = "password"
                                placeholder = "Password"
                            />>
                            <button type = "submit"  className="btn btn-primary"
                            // disabled={!this.validateForm()}
                            >Login</button>>
                            <Link to="/register">
                                <button className="btn btn-primary"> Register</button>
                            </Link>>
                            <Link to="/book">
                                <button className="btn btn-primary"> Book</button>
                            </Link>
                    </div>
                </div>
            </form>
        );
    }
}
function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        token : state.loginReducer.token
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAPI }, dispatch);
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login