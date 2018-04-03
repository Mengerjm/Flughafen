package com.flughafen.flughafen.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Airport {

    //Properties of the airport
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long airportId;

    private String airportName;
    private long airportCapacity;




}