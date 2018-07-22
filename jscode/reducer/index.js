import {combineReducers} from "redux";
import searchReducer, {createFoodListReducer} from "./searchReducer";


/**
 * reducers整合
 */
const reducer = combineReducers({
    search: searchReducer,
    recommendList: searchReducer
});

export default reducer;