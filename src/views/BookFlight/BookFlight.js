import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { bookAPI } from '../../redux/actions';


class BookFlight extends Component {
    state = {
        trip : '',
        class : ''
    }
    componentDidUpdate() {
        (this.props.isBooked) && this.props.history.push("/myBookings");
    }
    
   
    handleSubmit = (event) => {
        event.preventDefault();
            let travelDate = event.target.depart.value;
            let returnDate = event.target.return.value;
            const fromPlace = event.target.fromPlace.value;
            const toPlace = event.target.toPlace.value;
            const adultsCount = event.target.adults.value;
            const childrenCount = event.target.children.value;
            const infantsCount = event.target.infants.value;
            const tripType = this.state.trip;
            const travelClass = this.state.class
            returnDate = new Date(returnDate).toISOString();
            travelDate = new Date(travelDate).toISOString();
            debugger
            this.props.bookAPI({travelDate, returnDate, fromPlace, toPlace, adultsCount,childrenCount,infantsCount, tripType, travelClass}, this.props.token);    

    }
    
    setTrip(event) {
        console.log(event.target.value);
        this.setState({
            trip : event.target.value
        }) 
      }
      setClass(event) {
        console.log(event.target.value);
        this.setState({
            class : event.target.value
        }) 
      }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
            <div>
                <div className="container"> 
                    <h2> Book Flight </h2>
                    <div onChange={this.setTrip.bind(this)}>
                        <input type="radio" value="one-way" defaultChecked name="trip"/> One Way
                        <input type="radio" value="round" name="trip"/> Round Trip
                    </div>
                        <input 
                            type = "text"
                            name = "fromPlace"
                            placeholder = "From"
                        />
                         <input 
                            type = "text"
                            name = "toPlace"
                            placeholder = "To"
                        />
                        <label>Depart</label>
                        <input 
                            type = "date"
                            name = "depart"
                        />
                        <label>Return</label>
                        <input 
                            type = "date"
                            name = "return"
                        />
                        <input 
                            type = "number"
                            name = "adults"
                            placeholder = "Number of Adults"
                        />
                        <input 
                            type = "number"
                            name = "children"
                            placeholder = "Number of Childrens"
                        />
                        <input 
                            type = "number"
                            name = "infants"
                            placeholder = "Number of infants"
                        />
                        <label>
                            Travel Class:
                            <select value={this.state.class} onChange={this.setClass.bind(this)}>
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </select>
                        </label>
                        >
                            <button type = "submit" className="btn btn-primary" 
                            // disabled={!this.validateForm()}
                            >Book</button>
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
        isBooked: state.flightReducer.isBooked,
        isLoggedIn: state.loginReducer.isLoggedIn,
        token: state.loginReducer.token,

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ bookAPI }, dispatch);
}
const Book = connect(mapStateToProps, mapDispatchToProps)(BookFlight);

export default Book