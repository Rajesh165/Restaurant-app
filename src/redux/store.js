import {
    createStore
} from "redux";
import {
    initState,
    rootReducer
} from "./reducer";

const store = createStore(rootReducer, initState);
export default store;