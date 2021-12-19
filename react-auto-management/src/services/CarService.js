import axios from 'axios';

const CAR_BASE_URL = "http://localhost:8080/api/v1/cars/";
class CarService {
    getCars() {
        return axios.get(CAR_BASE_URL);
    }
    
    createCar(car) {
        return axios.post(CAR_BASE_URL, car);
    }
}

export default new CarService()