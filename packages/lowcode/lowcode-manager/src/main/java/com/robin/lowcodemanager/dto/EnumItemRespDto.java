package com.robin.lowcodemanager.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnumItemRespDto {
    private String label;
    private Object value;
    private String code;
}
