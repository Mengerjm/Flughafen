package com.flughafen.flughafen.repository;

import com.flughafen.flughafen.model.Plane;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaneRepository extends CrudRepository<Plane, Long> {
}
