package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.dto.AppLogger2Req;
import com.robin.lowcodemanager.dto.AppLoggerReq;
import com.robin.lowcodemanager.dto.BaseResponse;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.AppLogger;
import com.robin.lowcodemanager.entity.AppLogger2;
import com.robin.lowcodemanager.service.AppLogger2Service;
import com.robin.lowcodemanager.service.AppLoggerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/logger2")
public class AppLogger2Controller {
    @Autowired
    private AppLogger2Service appLogger2Service;

    @PostMapping("/list")
    public BaseResponse<PageResult<AppLogger2>> getList(@RequestBody AppLogger2Req appLogger2Req) {
        PageResult<AppLogger2> list = appLogger2Service.getList(appLogger2Req);
        return  BaseResponse.success(list);
    }
}
