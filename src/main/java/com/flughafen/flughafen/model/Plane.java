package com.flughafen.flughafen.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Plane {

    //Properties of the plane
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long planeId;

    private String planeBrand;
    private long fuel;
    private long fuelCapacity;

    @OneToMany
    private List<Plane> planes;


    //Getters & Setters

    public long getPlaneId() {
        return planeId;
    }

    public void setPlaneId(long planeId) {
        this.planeId = planeId;
    }

    public String getPlaneBrand() {
        return planeBrand;
    }

    public void setPlaneBrand(String planeBrand) {
        this.planeBrand = planeBrand;
    }

    public long getFuel() {
        return fuel;
    }

    public void setFuel(long fuel) {
        this.fuel = fuel;
    }

    public long getFuelCapacity() {
        return fuelCapacity;
    }

    public void setFuelCapacity(long fuelCapacity) {
        this.fuelCapacity = fuelCapacity;
    }

    public List<Plane> getPlanes() {
        return planes;
    }

    public void setPlanes(List<Plane> planes) {
        this.planes = planes;
    }
}
