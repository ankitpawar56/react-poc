
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBookingsAPI } from '../../redux/actions';
import List from '../../components/List/List';
import PropTypes from 'prop-types';

class MyBookings extends Component() {
    componentDidMount() {
        this.props.getBookingsAPI();
    }
render () {

    return (
        <div>
                <List myBookings = {this.props.myBookings} />
        </div>
    )
}
}

function mapStateToProps(state) {
    return {
        myBookings: state.flightReducer.myBookings,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBookingsAPI }, dispatch);
}

const Bookings = connect(mapStateToProps, mapDispatchToProps)(MyBookings)

// props validation
Bookings.propTypes = {
    history: PropTypes.object,
    myBookings: PropTypes.arrayOf(
        PropTypes.shape({
            fromPlace: PropTypes.string,
            toPlace: PropTypes.string,
            travelDate: PropTypes.string,
            status: PropTypes.string,
        })
    ),
    resetLoginStatus: PropTypes.func
}

export default Bookings;
