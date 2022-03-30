package com.auto.management.controller;

import java.util.ArrayList;
import java.util.List;

import com.auto.management.exception.ResourceNotFoundException;
import com.auto.management.model.Car;
import com.auto.management.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CarController {
    @Autowired
    private CarRepository carRepository;

//    @GetMapping("/cars")
//    public List<Car> getAllCars() {
//        return carRepository.findAll();
//    }

    @PostMapping("/cars")
    public Car createCar(@RequestBody Car car) {
        return carRepository.save(car);
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Car car = carRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Car not exist with id: " + id));
        return ResponseEntity.ok(car);
    }

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getAllCars(@RequestParam(required = false) String make) {
        try {
            List<Car> cars = new ArrayList<Car>();

            if (make == null)
                carRepository.findAll().forEach(cars::add);
            else
                carRepository.findByMakeContaining(make).forEach(cars::add);

            if (cars.isEmpty()) {
                return new ResponseEntity(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity(cars, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car updateCar) {
        Car car = carRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Car not exist with id: " + id));

        car.setMake(updateCar.getMake());
        car.setModel(updateCar.getModel());
        car.setYear(updateCar.getYear());

        return ResponseEntity.ok(carRepository.save(car));
    }

}
