import _ from "lodash";
import { FETCH_CARS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CARS:
            console.log(action);
            return _.mapKeys(action.payload, "id");
        default:
            return state;
    }
}