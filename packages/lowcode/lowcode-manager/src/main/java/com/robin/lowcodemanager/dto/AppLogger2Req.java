package com.robin.lowcodemanager.dto;

import com.robin.lowcodemanager.enums.AppLoggerPath;
import lombok.Data;

import java.io.Serializable;

@Data
public class AppLogger2Req implements Serializable {

    private int pageIndex = 1;
    private int pageSize = 10;
    // utd时间格式
    private String startTime;
    private String endTime;

    private String methodName;
    private String userName;
    private int minTakeTime;

}
