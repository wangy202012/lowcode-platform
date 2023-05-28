package com.robin.lowcodemanager.dto;

import lombok.Data;

@Data
public class MocksReqDto extends PageParam{
    private String id;
    private String name;
    private String engName;
    private String path;
    private String desc;
    private String content;
}
