import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cancelAPI } from "../../redux/actions";
import PropTypes from 'prop-types';

function Card({item, itemIndex, removeToDoItem}) {

    function cancelFlight() {
        const bookingId  = item.bookingId
        cancelAPI(bookingId,itemIndex);
    }

    return (
        <div >
            <div>
                <div>{item.fromPlace}</div>
                <div>{item.toPlace}</div>
                <div>{item.travelDate}</div>
                <div>{item.status}</div>
            </div>
            <button onClick = {cancelFlight}>Cancel</button>
        </div> 
    );
} 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ cancelAPI }, dispatch);
}

const Item = connect(null, mapDispatchToProps)(Card);

// props validation
Item.propTypes = {
    item: PropTypes.shape({
        fromPlace: PropTypes.string,
            toPlace: PropTypes.string,
            travelDate: PropTypes.string,
            status: PropTypes.string,
    }),
    itemIndex: PropTypes.number,
    removeToDoItem: PropTypes.func
}

export default Item;
