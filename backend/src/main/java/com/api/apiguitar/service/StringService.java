package com.api.apiguitar.service;

import com.api.apiguitar.data.Strings;
import com.api.apiguitar.pojo.MessageResponse;
import com.api.apiguitar.pojo.StringDto;
import com.api.apiguitar.repository.StringsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

@Service
public class StringService {

    @Autowired
    private StringsRepository stringsRepository;

    private Integer[] temp;

    public ResponseEntity<?> addStrings(@RequestBody StringDto stringDto) {

        if (stringDto.getNumberOfString() != stringDto.getCaliberString().length) {
            return ResponseEntity.badRequest().body(new MessageResponse("the number of strings must match the number of calibers"));
        }

        temp = stringDto.getCaliberString();
        Arrays.sort(temp);

        Strings strings = new Strings(
                stringDto.getName(),
                stringDto.getCategory(),
                stringDto.getPrice(),
                stringDto.getCountry(),
                stringDto.getStockQuantity(),
                stringDto.getSizeNumber(),
                stringDto.getNumberOfString(),
                stringDto.getCoverage(),
                stringDto.getTypeOfBraid(),
                temp);

        stringsRepository.save(strings);
        return ResponseEntity.ok(strings);
    }

    public Iterable<Strings> getAll() {
        return stringsRepository.findAll();
    }
    public ResponseEntity<?> getById(@RequestParam(name = "id") Long id) {
        if (stringsRepository.findById(id).isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("no such id"));
        }

        return ResponseEntity.ok(stringsRepository.findById(id));
    }

    public ResponseEntity<?> getByCategory(@RequestParam(name = "category") String category) {
        return ResponseEntity.ok(stringsRepository.findByCategory(category));
    }

    public ResponseEntity<?> deleteById(@RequestParam(name = "id") Long id) {
        stringsRepository.deleteById(id);
        return ResponseEntity.ok("Success delete guitar id " + id);
    }

    public Strings updateStrings(@PathVariable Long id, @RequestBody Map<String, Object> updates){



        Map<String, BiConsumer<Strings, Object>> setters = Map.of(
                "name", (strings, value) -> strings.setName((String) value),
                "category", (strings, value) -> strings.setCategory((String) value),
                "price", (strings, value) -> strings.setPrice((Double) value),
                "country", (strings, value) -> strings.setCountry((String) value),
                "stockQuantity", (strings, value) -> strings.setStockQuantity((Integer) value),
                "sizeNumber", (strings, value) -> strings.setSizeNumber((String) value),
                "numberOfString", (strings, value) -> strings.setNumberOfString((Integer) value),
                "coverage", (strings, value) -> strings.setCoverage((String) value),
                "typeOfBraid", (strings, value) -> strings.setTypeOfBraid((String) value),
                "caliberString", (strings, value) -> strings.setCaliberString((Integer[]) value)
        );
        return stringsRepository.findById(id)
                .map(existingStrings -> {
                    updates.forEach((key, value) -> {
                        if (setters.containsKey(key)) {
                            if (key.equals("caliberString") && value instanceof List) {
                                List<Integer> list = (List<Integer>) value;
                                Integer[] array = list.toArray(new Integer[0]);
                                setters.get(key).accept(existingStrings, array);
                            }
                        }
                    });
                    return stringsRepository.save(existingStrings);
                }).orElse(null);
    }

}
