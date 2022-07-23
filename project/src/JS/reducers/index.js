import { combineReducers } from "redux";
import { flightReducer } from "./Flight_reducer";
export const rootReducer = combineReducers({flightReducer});