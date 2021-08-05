import {
    DISHES
} from "../shared/dishes";
import {
    LEADERS
} from "../shared/leader";
import {
    PROMOTIONS
} from "../shared/promotion";
import {
    COMMENTS
} from "../shared/comment";

export const initState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    comments: COMMENTS,
};

export const rootReducer = (state = initState, action) => {
    return state;
};