package com.glabs.commonRepositories;

import java.util.Optional;

import com.glabs.shared.ERole;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.glabs.models.*;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
