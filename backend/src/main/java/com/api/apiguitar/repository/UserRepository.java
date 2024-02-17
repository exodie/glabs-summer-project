package com.api.apiguitar.repository;

import com.api.apiguitar.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String username);
    Optional<User> findByPhone(String phone);
    Boolean existsByPhone(String phone);
    Boolean existsByEmail(String email);
}