import { FILTER } from "./actionTypes";

export const filter = (value) => {
    return {
        type: FILTER,
        payload: value
    };
};