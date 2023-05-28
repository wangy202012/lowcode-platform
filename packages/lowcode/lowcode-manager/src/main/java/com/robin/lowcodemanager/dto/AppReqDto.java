package com.robin.lowcodemanager.dto;

import lombok.Data;

@Data
public class AppReqDto extends PageParam{
    private String appId;
    private String appName;
    private String appPath;
}
