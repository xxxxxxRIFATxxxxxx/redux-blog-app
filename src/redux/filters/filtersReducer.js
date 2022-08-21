import { FILTER } from "./actionTypes";
import initialState from "./initialState";

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER:
            return action.payload;
    
        default:
            return state;
    };
};

export default filtersReducer;