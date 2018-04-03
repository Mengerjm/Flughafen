package com.flughafen.flughafen.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Plane {

    //Properties of the plane
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long planeid;

    private String planebrand;
    private long fuel;
    private long fuelcapacity;


    //Getters & Setters
    public long getPlaneid() {
        return planeid;
    }

    public void setPlaneid(long planeid) {
        this.planeid = planeid;
    }

    public String getPlanebrand() {
        return planebrand;
    }

    public void setPlanebrand(String planebrand) {
        this.planebrand = planebrand;
    }

    public long getFuel() {
        return fuel;
    }

    public void setFuel(long fuel) {
        this.fuel = fuel;
    }

    public long getFuelcapacity() {
        return fuelcapacity;
    }

    public void setFuelcapacity(long fuelcapacity) {
        this.fuelcapacity = fuelcapacity;
    }

}
