package com.flughafen.flughafen.controller;

import com.flughafen.flughafen.model.Airport;
import com.flughafen.flughafen.model.Plane;
import com.flughafen.flughafen.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/airport")
public class AirportController {

    @Autowired
    private AirportRepository airportRepository;



    // Creates the data for 'Airport'
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Airport create(@RequestBody Airport airport) {
        return airportRepository.save(airport);
    }

    // Gets the data from 'Airport'
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Airport> getAll() {
        return airportRepository.findAll();
    }
}