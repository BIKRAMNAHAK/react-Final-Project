import { combineReducers } from "redux";
import userReducer from "./userReducers";


const rootReducer = combineReducers({userReducer})

export default rootReducer