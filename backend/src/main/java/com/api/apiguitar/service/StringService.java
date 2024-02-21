package com.api.apiguitar.service;

import com.api.apiguitar.data.Strings;
import com.api.apiguitar.pojo.MessageResponse;
import com.api.apiguitar.pojo.StringDto;
import com.api.apiguitar.repository.StringsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Arrays;

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


}
