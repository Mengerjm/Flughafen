package com.flughafen.flughafen.controller;

import com.flughafen.flughafen.model.Plane;
import com.flughafen.flughafen.repository.AirportRepository;
import com.flughafen.flughafen.repository.PlaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/plane/")
public class PlaneController {

    @Autowired
    private PlaneRepository planeRepository;

    @Autowired
    private AirportRepository airportRepository;


    // Creates the data for 'plane'
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Plane create(@RequestBody Plane plane) {
        return planeRepository.save(plane);
    }

    // Gets the data from 'plane'
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Plane> getAll() {
        return planeRepository.findAll();
    }
}



