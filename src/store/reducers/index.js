import { combineReducers } from "redux";
import cashReducer from "./cashReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    theme: themeReducer
})

export default rootReducer;