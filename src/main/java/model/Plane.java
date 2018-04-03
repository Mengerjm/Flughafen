package model;

public class Plane {

    //Properties of the plane
    private long planeid;
    private String planebrand;
    private long fuel;
    private long fuelcapacity;


    //Added a line so it's retrievable by springboot
    public Plane() {

    }

    //Constructor
    public Plane(String planebrand, long fuel, long fuelcapacity) {
        this.planebrand = planebrand;
        this.fuel = fuel;
        this.fuelcapacity = fuelcapacity;
    }



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
