import Cars from '../api/cars';

export const FETCH_CARS = 'FETCH_CARS';

console.log(Cars);

export default function fetchCars() {
    return {
        type: FETCH_CARS,
        payload: Cars
    }
}