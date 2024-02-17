package com.api.apiguitar.repository;

import com.api.apiguitar.data.Guitar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GuitarRepository extends JpaRepository<Guitar, Long> {
    Optional<Guitar> findById(Long id);
    List<Guitar> findByCategory(String category);

    void deleteById(Long id);
}
