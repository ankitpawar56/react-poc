import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

export default function List() {
    return (
        <div>
            {/* {myBookings && myBookings.map((item, index) => (
                <Card key = {index} item = {item} itemIndex = {index} />
            ))} */}
        </div>
    );
}

List.propTypes = {
    myBookings: PropTypes.arrayOf(
        PropTypes.shape({
            fromPlace: PropTypes.string,
            toPlace: PropTypes.string,
            travelDate: PropTypes.string,
            status: PropTypes.string,
        })
    )
}
