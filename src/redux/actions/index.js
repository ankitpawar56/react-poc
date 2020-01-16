import { BASE_URL} from '../../utils/config';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_SUCCESS,
    BOOK_SUCCESS,
    BOOK_FAILURE,
    CANCEL_BOOKING,
    GET_BOOKINGS
} from "./actionTypes";

async function handleAPICall(params) {

    const apiObj = {
        method: params.TYPE || "GET",
        credentials: "same-origin",
    }

    if (params.TYPE === "POST") {
        apiObj.headers = {'Content-Type':'application/json', 'x-access-token': params.token ? params.token : undefined}
        apiObj.body = JSON.stringify(params.data);
    }
    const response = await fetch(params.END_POINT, apiObj,);
    if (response) {

        const resJson = await response.json();

        try {
            params.dispatch({type: params.successAction, payload: resJson, data: params.data});
        } catch (e) {
            params.dispatch({type: params.failedAction, payload: resJson});
        }
    }
}

export function loginAPI(obj) {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "users/login?",
            successAction: LOGIN_SUCCESS,
            failedAction: LOGIN_FAILURE,
            data: obj,
            TYPE: "POST"
        }

        handleAPICall(params);
    }
}
export function registerAPI(obj) {
    return dispatch => {
        const user = localStorage.getItem('token');
        const params = {
            dispatch,
            END_POINT: BASE_URL + "users/register?",
            successAction: REGISTER_SUCCESS,
            failedAction: LOGIN_FAILURE,
            data: obj,
            TYPE: "POST",
            token: user
        }

        handleAPICall(params);
    }
}
export function bookAPI(obj, token) {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "flights/bookFlight",
            successAction: BOOK_SUCCESS,
            failedAction: BOOK_FAILURE,
            data: obj,
            TYPE: "POST",
            token: token

        }

        handleAPICall(params);
    }
}

export function cancelAPI(obj, itemIndex) {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "flights/cancelFlight",
            successAction: CANCEL_BOOKING,
            failedAction: '',
            data: obj,
            TYPE: "POST",
            payload: itemIndex
        }

        handleAPICall(params);
    }
}

export function getBookingsAPI() {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "flights/getBookingsData",
            successAction: GET_BOOKINGS,
            failedAction: '',
            TYPE: "POST",
        }

        handleAPICall(params);
    }
}
