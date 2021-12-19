package com.auto.management.model;

import javax.persistence.*;

@Entity
@Table(name = "VehicleModelYear")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "year")
    private int year;

    @Column(name = "make")
    private String make;

    @Column(name = "model")
    private String model;

    public Car() {

    }

    public Car(int year, String make, String model) {
        super();
        this.year = year;
        this.make = make;
        this.model = model;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getYear() {
        return year;
    }
    public void setYear(int year) {
        this.year = year;
    }
    public String getMake() {
        return make;
    }
    public void setMake(String make) {
        this.make = make;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
}
