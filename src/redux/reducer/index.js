import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import flightReducer from './flightReducer'

export default combineReducers({
    loginReducer,
    flightReducer
});
