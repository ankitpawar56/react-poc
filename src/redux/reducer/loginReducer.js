import { 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    REGISTER_SUCCESS } from "../actions/actionTypes";


const initialState = {
    isLoggedIn: false,
    isRegistered: false,
    token : ''
};

const loginReducer = function(state = initialState, {type, data, payload}) {
    switch(type) {
        case LOGIN_SUCCESS:
            const userInput = data;
            const loginCreds = payload;
            const isLoggedIn = (JSON.stringify(userInput) === JSON.stringify(loginCreds));
            const token = payload.data.token
            return {
                ...state,
                isLoggedIn: true,
                token
            };
        case LOGIN_FAILURE:
            alert("Authentication failed")
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_SUCCESS:
                return {
                    ...state,
                    isRegistered: true,
                };
        default:
            return state;

    }
};

export default loginReducer;