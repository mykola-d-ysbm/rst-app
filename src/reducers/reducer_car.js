import { FETCH_CAR } from '../actions';

const initialState = {
    id: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CAR:
            return action.payload;
        default:
            return state;
    }
}