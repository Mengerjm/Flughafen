package com.flughafen.flughafen.controller;

import com.flughafen.flughafen.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.ManyToMany;
import java.util.List;

@RestController
@RequestMapping("api/airport/")
public class AirportController {

    @Autowired
    private AirportRepository airportRepository;



}