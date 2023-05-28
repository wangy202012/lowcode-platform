package com.robin.lowcodemanager.dto;

import com.robin.lowcodemanager.entity.AppContent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class AppContentExt extends AppContent {
    private Integer type;
    private String desc;
    private String version;
}
