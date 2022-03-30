import axios from 'axios';

const CAR_BASE_URL = "http://localhost:8080/api/v1/cars/";
class CarService {
    getCars() {
        return axios.get(CAR_BASE_URL);
    }
    
    createCar(car) {
        return axios.post(CAR_BASE_URL, car);
    }

    findByMake(make) {
        return axios.get(CAR_BASE_URL + `?make=` + make );
    }

    getCarById(id) {
        console.log(CAR_BASE_URL + id);
        return axios.get(CAR_BASE_URL + id);
    }

    updateCar(car, id) {
        return axios.put(CAR_BASE_URL + id, car);
    }
}

export default new CarService()