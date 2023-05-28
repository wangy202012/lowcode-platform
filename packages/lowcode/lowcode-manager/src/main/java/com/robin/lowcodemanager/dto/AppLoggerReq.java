package com.robin.lowcodemanager.dto;

import com.robin.lowcodemanager.enums.AppLoggerPath;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class AppLoggerReq implements Serializable {

    private int pageIndex = 1;
    private int pageSize = 10;
    // utd时间格式
    private String startTime;
    private String endTime;
    private String pathCode = AppLoggerPath.ALL.getCode();

}
