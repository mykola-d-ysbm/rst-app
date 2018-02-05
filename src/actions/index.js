import Cars from '../api/cars';

export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars() {
    return {
        type: FETCH_CARS,
        payload: Cars
    }
}