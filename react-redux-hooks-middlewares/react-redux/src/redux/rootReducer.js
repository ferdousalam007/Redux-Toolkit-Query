import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer= combineReducers({
    counter:counterReducer,
    dynamicReducer:dynamicCounterReducer
});
export default rootReducer;