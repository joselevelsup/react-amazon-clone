import { combineReducers } from "redux";
import homeReducer from "./home.reducer";
import itemDetailReducer from "./itemDetail.reducer";
// import searchReducer from "./search.reducer";

const rootReducer = combineReducers({
    homeReducer,
    itemDetailReducer
});

export default rootReducer;