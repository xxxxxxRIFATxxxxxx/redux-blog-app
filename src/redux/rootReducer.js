import { combineReducers } from "redux";
import blogsReducer from "./blogs/blogsReducer";
import filtersReducer from "./filters/filtersReducer";

const rootReducer = combineReducers({
    blogs: blogsReducer,
    filters: filtersReducer
});

export default rootReducer;