package com.glabs.entities.user.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.glabs.models.User;

public interface UserRepository extends MongoRepository<User, String> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);

  Optional<User> findById (String id);
}
