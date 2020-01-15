import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerAPI } from '../../redux/actions';
import { Link } from 'react-router-dom';


class RegisterComponent extends Component {
    componentDidUpdate() {
        (this.props.isRegistered) && this.props.history.push("/login");
    }
    state = {
        gender : ''
    }
    setGender(event) {
        console.log(event.target.value);
        this.setState({
            gender : event.target.value
        }) 
      }
      handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const mobile = event.target.phone.value;
        const firstName = event.target.fname.value;
        const lastName = event.target.lname.value;
        const password = event.target.password.value;
        const gender = this.state.gender;
        

        this.props.registerAPI({email, mobile, firstName, lastName, gender, password});
    }
    render() {

    return(
        <form onSubmit = {this.handleSubmit}>
        <div>
            <div className="container"> 
                <h2> Register </h2>
                    <input 
                        type = "email"
                        name = "email"
                        placeholder = "Email Address"
                    />
                    <input 
                        type = "text"
                        name = "phone"
                        placeholder = "Phone Number"
                    />
                    <input 
                        type = "text"
                        name = "fname"
                        placeholder = "First Name"
                    /><input 
                        type = "text"
                        name = "lname"
                        placeholder = "Last Name"
                    />
                    <div onChange={this.setGender.bind(this)}>
                        <input type="radio" value="Male" name="gender"/> Male
                        <input type="radio" value="Female" name="gender"/> Female
                    </div>
                    <input 
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                    />
                    <input 
                        type = "password"
                        name = "renterpassword"
                        placeholder = "Re-Enter Password"
                    />>
                    <button className="btn btn-primary" type = "submit" 
                    // disabled={!this.validateForm()}
                    >Register</button>
                    <Link to="/myBookings">
                                <button className="btn btn-primary"> My Bookings</button>
                    </Link>
            </div>
        </div>
    </form>
    )
    }
}
function mapStateToProps(state) {
    return {
        isRegistered: state.loginReducer.isRegistered,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ registerAPI }, dispatch);
}
const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

export default Register