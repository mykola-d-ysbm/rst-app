import Cars from '../api/cars';
import fetchCarById from  '../api/car';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

export function fetchCars() {
    return {
        type: FETCH_CARS,
        payload: Cars
    }
}

export function fetchCar(id) {
    console.log(id);
    const car = fetchCarById(id);
    return {
        type: FETCH_CAR,
        payload: car
    }
}