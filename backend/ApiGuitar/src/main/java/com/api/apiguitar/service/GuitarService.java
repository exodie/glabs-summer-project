package com.api.apiguitar.service;

import com.api.apiguitar.data.Guitar;
import com.api.apiguitar.pojo.GuitarDto;
import com.api.apiguitar.pojo.MessageResponse;
import com.api.apiguitar.repository.GuitarRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigDecimal;
import java.util.Map;
import java.util.function.BiConsumer;

@Service
public class GuitarService {

    private final GuitarRepository guitarRepository;

    public GuitarService(GuitarRepository guitarRepository) {
        this.guitarRepository = guitarRepository;
    }

    public ResponseEntity<?> addGuitar(@RequestBody GuitarDto guitarDto) {
        Guitar guitar = new Guitar(
                guitarDto.getName(),
                guitarDto.getBrand(),
                guitarDto.getModel(),
                guitarDto.getDescription(),
                guitarDto.getPrice(),
                guitarDto.getStockQuantity(),
                guitarDto.getCategory(),
                guitarDto.getImageUrl());

        guitarRepository.save(guitar);

        return ResponseEntity.ok(guitar);
    }

    public Iterable<Guitar> getAll() {
        return guitarRepository.findAll();
    }

    public ResponseEntity<?> getById(@RequestParam(name = "id") Long id) {
        if (guitarRepository.findById(id).isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("no such id"));
        }

        return ResponseEntity.ok(guitarRepository.findById(id));
    }

    public ResponseEntity<?> getByCategory(@RequestParam(name = "category") String category) {
        return ResponseEntity.ok(guitarRepository.findByCategory(category));
    }

    public ResponseEntity<?> deleteById(@RequestParam(name = "id") Long id) {
        guitarRepository.deleteById(id);
        return ResponseEntity.ok("Success delete guitar id " + id);
    }

    public Guitar updateGuitar(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        Map<String, BiConsumer<Guitar, Object>> setters = Map.of(
                "name", (guitar, value) -> guitar.setName((String) value),
                "brand", (guitar, value) -> guitar.setBrand((String) value),
                "model", (guitar, value) -> guitar.setModel((String) value),
                "description", (guitar, value) -> guitar.setDescription((String) value),
                "price", (guitar, value) -> guitar.setPrice(BigDecimal.valueOf((Double) value)),
                "stockQuantity", (guitar, value) -> guitar.setStockQuantity((int) value),
                "category", (guitar, value) -> guitar.setCategory((String) value),
                "imageUrl", (guitar, value) -> guitar.setImageUrl((String) value)
        );

        return guitarRepository.findById(id)
                .map(existingGuitar -> {
                    updates.forEach((key, value) -> {
                        if (setters.containsKey(key)) {
                            setters.get(key).accept(existingGuitar, value);
                        }
                    });
                    return guitarRepository.save(existingGuitar);
                }).orElse(null);
    }
}
