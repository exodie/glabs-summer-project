package com.api.apiguitar.repository;

import com.api.apiguitar.data.Strings;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StringsRepository extends CrudRepository<Strings, Long> {
}
