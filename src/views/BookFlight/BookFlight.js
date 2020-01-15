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
        (this.props.isBooked) && this.props.history.push("/login");
    }
    setTrip(event) {
        console.log(event.target.value);
        this.setState({
            trip : event.target.value
        }) 
      }
    setClass(event) {
        this.setState({
            class : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.props.isLoggedIn) {
            alert("Please Log in")
        }
        else {
            const travelDate = event.target.depart.value;
            const returnDate = event.target.return.value;
            const fromPlace = event.target.fromPlace.value;
            const toPlace = event.target.toPlace.value;
            const adultsCount = event.target.adults.value;
            const childrenCount = event.target.children.value;
            const infantsCount = event.target.infants.value;
            const tripType = this.state.trip;
            const travelClass = this.state.class
            
    
            this.props.bookAPI({travelDate, returnDate, fromPlace, toPlace, adultsCount,childrenCount,infantsCount, tripType, travelClass}); 
        }
        const travelDate = event.target.depart.value;
        const returnDate = event.target.return.value;
        const fromPlace = event.target.fromPlace.value;
        const toPlace = event.target.toPlace.value;
        const adultsCount = event.target.adults.value;
        const childrenCount = event.target.children.value;
        const infantsCount = event.target.infants.value;
        const tripType = this.state.trip;
        const travelClass = this.state.class
        

        this.props.bookAPI({travelDate, returnDate, fromPlace, toPlace, adultsCount,childrenCount,infantsCount, tripType, travelClass});
    }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
            <div>
                <div className="container"> 
                    <h2> Book Flight </h2>
                    <div onChange={this.setTrip.bind(this)}>
                        <input type="radio" value="one-way" name="trip"/> One Way
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
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </select>
                        </label>
                        >
                        <Link to="/result">
                            <button type = "submit" className="btn btn-primary" 
                            // disabled={!this.validateForm()}
                            >Book</button>
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
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ bookAPI }, dispatch);
}
const Book = connect(mapStateToProps, mapDispatchToProps)(BookFlight);

export default Book