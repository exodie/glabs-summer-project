package com.api.apiguitar.controlles;

import com.api.apiguitar.pojo.StringDto;
import com.api.apiguitar.service.StringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/catalog/string")
public class StringController {

    @Autowired
    private StringService stringService;

    @PostMapping("/add")
    public ResponseEntity<?> addStrings(@RequestBody StringDto stringDto) {
        return stringService.addStrings(stringDto);
    }
}
