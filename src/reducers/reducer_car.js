import { FETCH_CAR } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CAR:
            console.log(action);
            return { ...state, [action.payload]: action.payload };
        default:
            return state;
    }
}