import Cars from '../api/cars';

export default function fetchCarById(id) {
    return (
        Cars.find(item => item.id === id)
    );
}