import Cars from '../api/cars';

export const FETCH_CARS = 'FETCH_CARS';

console.log(Cars);

export function fetchCars() {
    return {
        type: FETCH_CARS,
        payload: Cars
    }
}

export const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts () {

    const request = axios.get('/api/products');

    console.log(request);
    return {
        type: GET_PRODUCTS,
        payload: request
    }
}