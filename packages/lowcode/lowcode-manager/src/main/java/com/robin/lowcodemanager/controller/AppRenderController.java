package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.aop.ControllerWebLog;
import com.robin.lowcodemanager.dto.AppContentExt;
import com.robin.lowcodemanager.dto.BaseResponse;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.dto.RecordReq;
import com.robin.lowcodemanager.entity.App;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.enums.RecordType;
import com.robin.lowcodemanager.service.AppContentRecordService;
import com.robin.lowcodemanager.service.AppContentService;
import com.robin.lowcodemanager.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin("*")
@RestController
@RequestMapping("/renderer")
// 和AppContentController类似，不用登录
public class AppRenderController {
    @Autowired
    private AppContentService appContentService;

    @Autowired
    private AppContentRecordService appContentRecordService;


    @Autowired
    private AppService appService;

    @GetMapping("/{id}")
    @ControllerWebLog(name = "渲染应用内容(id)")
    public BaseResponse<AppContent> getById(@PathVariable(name = "id") Long id) {
        AppContent appContent = appContentService.getById(id);
        return BaseResponse.success(appContent);
    }

    @GetMapping("/path/{path}")
    @ControllerWebLog(name = "渲染应用内容(path)")
    public BaseResponse<AppContent> getByPath(@PathVariable(name = "path") String path) {
        // 先获取id
        App app = appService.getAppByPath(path);
        if (app == null) {
            return BaseResponse.error("没找到应用");
        }
        AppContent appContent = appContentService.getById(app.getAppId());
        return BaseResponse.success(appContent);
    }

    @GetMapping("/pubPath/{path}")
    @ControllerWebLog(name = "渲染发布应用内容(path)")
    public BaseResponse<AppContentRecord> getByPubPath(@PathVariable(name = "path") String path) {
        // 先获取id
        App app = appService.getAppByPath(path);
        if (app == null) {
            return BaseResponse.error("没找到应用");
        }


        RecordReq recordReq = new RecordReq();
        ArrayList<Integer> types = new ArrayList<>();
        types.add(RecordType.PUBLISH.getValue());
        recordReq.setTypeList(types);
        recordReq.setPageSize(1);
        recordReq.setPageIndex(1);
        recordReq.setAppId(app.getAppId());

        PageResult<AppContentRecord> pageResult = appContentRecordService.getList(recordReq);
        if(pageResult.getTotal()==0) {
            return BaseResponse.error("当前应用没有发布");
        }
        return BaseResponse.success(pageResult.getList().get(0));

    }
}
