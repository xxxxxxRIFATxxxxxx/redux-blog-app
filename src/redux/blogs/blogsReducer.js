import initialState from "./initialState";

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {    
        default:
            return state;
    }
};

export default blogsReducer;