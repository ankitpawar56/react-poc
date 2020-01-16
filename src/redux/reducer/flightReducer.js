import { 
    BOOK_SUCCESS, 
    BOOK_FAILURE,
    CANCEL_BOOKING,
    GET_BOOKINGS
 } from "../actions/actionTypes";


const initialState = {
    myBookings : [],
    isBooked: false,
};

const flightReducer = function(state = initialState, {type, data, payload}) {
    switch(type) {
        case BOOK_SUCCESS:
            const isBooked = true
            return {
                ...state,
                isBooked,
            };
        case BOOK_FAILURE:
            return {
                ...state,
                isBooked: false,
            };
        case CANCEL_BOOKING:
            const myBookings = state.myBookings.filter((item, index) => index !== payload);
            return {
                ...state,
                myBookings,
            };
        case GET_BOOKINGS:
                state.myBookings.unshift(payload);
                return {
                    ...state,
            };
        default:
            return state;

    }
};

export default flightReducer;