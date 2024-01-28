package com.api.apiguitar.controlles;

import com.api.apiguitar.data.Guitar;
import com.api.apiguitar.pojo.GuitarDto;
import com.api.apiguitar.service.GuitarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/catalog")
public class GuitarController {

    private final GuitarService guitarService;

    public GuitarController(GuitarService guitarService) {
        this.guitarService = guitarService;
    }

    @PostMapping("/add")
    private ResponseEntity<?> addItem(@RequestBody GuitarDto guitarDto) {
        return guitarService.addGuitar(guitarDto);
    }

    @GetMapping("/getAll")
    private Iterable<Guitar> getAll() {
        return guitarService.getAll();
    }

    @GetMapping("/getById")
    private ResponseEntity<?> getById(@RequestParam(name = "id") Long id) {
        return guitarService.getById(id);
    }

    @GetMapping("/getByCategory")
    private ResponseEntity<?> getByCategory(@RequestParam(name = "category") String category){
        return guitarService.getByCategory(category);
    }

    @DeleteMapping("/deleteById")
    private ResponseEntity<?> deleteById(@RequestParam(name = "id") Long id){
        return guitarService.deleteById(id);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<Guitar> updateGuitar(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        Guitar updatedGuitar = guitarService.updateGuitar(id, updates);
        if (updatedGuitar != null) {
            return ResponseEntity.ok(updatedGuitar);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
