package com.api.apiguitar.controlles;

import com.api.apiguitar.data.Strings;
import com.api.apiguitar.pojo.StringDto;
import com.api.apiguitar.service.StringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/product/string")
public class StringController {

    @Autowired
    private StringService stringService;

    @PostMapping("/add")
    public ResponseEntity<?> addStrings(@RequestBody StringDto stringDto) { return stringService.addStrings(stringDto); }

    @GetMapping("/getAll")
    public Iterable<Strings> getAll() { return stringService.getAll(); }

    @GetMapping("/getById")
    private ResponseEntity<?> getById(@RequestParam(name = "id") Long id) {
        return stringService.getById(id);
    }

    @GetMapping("/getByCategory")
    private ResponseEntity<?> getByCategory(@RequestParam(name = "category") String category){
        return stringService.getByCategory(category);
    }

    @DeleteMapping("/deleteById")
    private ResponseEntity<?> deleteById(@RequestParam(name = "id") Long id){ return stringService.deleteById(id); }

    @PatchMapping("/update/{id}")
    public ResponseEntity<Strings> updateGuitar(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        Strings updatedStrings = stringService.updateStrings(id, updates);
        if (updatedStrings != null) {
            return ResponseEntity.ok(updatedStrings);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
