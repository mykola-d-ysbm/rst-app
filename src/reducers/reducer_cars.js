import { FETCH_CARS, GET_CAR } from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CARS:
            return action.payload;
        case GET_CAR:
            return action.payload;
        default:
            return state;
    }
}