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
        return guitarRepository.findById(id)
                .map(existingGuitar -> {
                    if (updates.containsKey("name")) {
                        existingGuitar.setName((String) updates.get("name"));
                    }
                    if (updates.containsKey("brand")) {
                        existingGuitar.setBrand((String) updates.get("brand"));
                    }
                    if (updates.containsKey("model")) {
                        existingGuitar.setModel((String) updates.get("model"));
                    }
                    if (updates.containsKey("description")) {
                        existingGuitar.setDescription((String) updates.get("description"));
                    }
                    if (updates.containsKey("price")) {
                        existingGuitar.setPrice(BigDecimal.valueOf((Double) updates.get("price")));
                    }
                    if (updates.containsKey("stockQuantity")) {
                        existingGuitar.setStockQuantity((int) updates.get("stockQuantity"));
                    }
                    if (updates.containsKey("category")) {
                        existingGuitar.setCategory((String) updates.get("category"));
                    }
                    if (updates.containsKey("imageUrl")) {
                        existingGuitar.setImageUrl((String) updates.get("imageUrl"));
                    }

                    return guitarRepository.save(existingGuitar);
                }).orElse(null);
    }
}
