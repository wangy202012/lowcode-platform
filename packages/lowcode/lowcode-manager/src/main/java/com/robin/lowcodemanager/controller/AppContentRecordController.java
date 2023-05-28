package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.aop.ControllerWebLog;
import com.robin.lowcodemanager.dto.AppContentExt;
import com.robin.lowcodemanager.dto.BaseResponse;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.dto.RecordReq;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.service.AppContentRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/record")
public class AppContentRecordController {


    @Autowired
    private AppContentRecordService appContentRecordService;

    // 因为参数多，所以get改为post
    @PostMapping("/list")
    @ControllerWebLog(name = "获取内容记录")
    public BaseResponse<PageResult<AppContentRecord>> getList( @RequestBody RecordReq recordReq) {
        PageResult<AppContentRecord> list = appContentRecordService.getList(recordReq);
        return   BaseResponse.success(list);
    }
}
