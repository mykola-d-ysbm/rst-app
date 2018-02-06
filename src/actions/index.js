import Cars from '../api/cars';

export const FETCH_CARS = 'FETCH_CARS';
export const GET_CAR = 'GET_CAR';

export function fetchCars() {
    return {
        type: FETCH_CARS,
        payload: Cars
    }
}

export function getCar(carId) {
    var car = Cars.find(item => item.id === carId);
    return {
        type: GET_CAR,
        payload: car
    }
}