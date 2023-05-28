package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.dto.*;
import com.robin.lowcodemanager.entity.AppLogger;

import com.robin.lowcodemanager.service.AppLoggerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/logger")
public class AppLoggerController {
    @Autowired
    private AppLoggerService appLoggerService;

    @PostMapping("/list")
    public BaseResponse<PageResult<AppLogger>> getList(@RequestBody AppLoggerReq appLoggerReq) {
        PageResult<AppLogger> list = appLoggerService.getList(appLoggerReq);
        return  BaseResponse.success(list);
    }
}
