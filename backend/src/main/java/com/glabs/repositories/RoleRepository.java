package com.glabs.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.glabs.models.*;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
