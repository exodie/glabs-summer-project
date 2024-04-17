package com.glabs.scripts.java;
import lombok.Data;

import java.util.Map;

@Data
public class UsedElectroGuitar {
    private String name;
    private String price;
    private String type;
    private Map<String, String> characteristics;
}

