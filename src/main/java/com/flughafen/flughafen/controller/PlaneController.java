package com.flughafen.flughafen.controller;

import com.flughafen.flughafen.model.Plane;
import com.flughafen.flughafen.repository.AirportRepository;
import com.flughafen.flughafen.repository.PlaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.ManyToMany;
import java.util.List;

@RestController
@RequestMapping("api/plane/")
public class PlaneController {

    @Autowired
    private PlaneRepository planeRepository;

    @Autowired
    private AirportRepository airportRepository;

    @ManyToMany
    private List<Plane> planes;


}
