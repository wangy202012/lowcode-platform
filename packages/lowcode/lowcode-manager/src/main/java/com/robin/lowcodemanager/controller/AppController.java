package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.aop.ControllerWebLog;
import com.robin.lowcodemanager.dto.*;
import com.robin.lowcodemanager.entity.App;
import com.robin.lowcodemanager.service.AppService;
import com.robin.lowcodemanager.utils.InputMDC;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/app")
public class AppController {
    @Autowired
    private AppService appService;


    @GetMapping("/list")
    @ControllerWebLog(name = "查询列表")
    public BaseResponse<PageResult<App>> getList(AppReqDto appReqDto) {
        return BaseResponse.success(appService.getList(appReqDto));
    }

    @GetMapping("/{id}")
    @ControllerWebLog(name = "根据id获取应用")
    public BaseResponse<App> getAppById(@PathVariable(name = "id") String id) {
        AppReqDto appReqDto = new AppReqDto();
        appReqDto.setAppId(id);
        PageResult<App> list = appService.getList(appReqDto);
        App app = null;
        if(list.getList().size()!=0){
            app = list.getList().get(0);
        }
        return BaseResponse.success(app);
    }

    /**
     * 1、新增post，更新put
     * 2、仅仅新增mapping不用参数，其他都要
     * */
    @PostMapping()
    @ControllerWebLog(name = "创建应用")
    public BaseResponse<Boolean> createApp(@RequestBody AppExt appExt) {
        List<String> appPathList = appService.getAppPathList(0L);
        boolean contains = appPathList.contains(appExt.getAppPath());
        if(contains){
            return BaseResponse.error("该应用路径已存在，请更换路径");
        }
        return BaseResponse.success(appService.createApp(appExt,null) == 1);
    }

    @PostMapping("/copy/{id}")
    @ControllerWebLog(name = "复制应用")
    public BaseResponse<Boolean> copyApp(@PathVariable(name = "id") Long id) {
        return BaseResponse.success(appService.copyApp(id) == 1);
    }

    /**
     * 更新的参数有两类：params和body
     * */
    @PutMapping("/{id}")
    @ControllerWebLog(name = "更新应用")
    public BaseResponse<Boolean> updateApp(@PathVariable(name = "id") Long id, @RequestBody App app) {
        List<String> appPathList = appService.getAppPathList(id);
        boolean contains = appPathList.contains(app.getAppPath());
        if(contains){
            return BaseResponse.error("该应用路径已存在，请更换路径");
        }
        return BaseResponse.success(appService.updateApp(id,app) == 1);
    }




    @DeleteMapping("/{id}")
    @ControllerWebLog(name = "删除应用")
    public BaseResponse<Boolean> deleteApp(@PathVariable(name = "id") Long id) {

        return BaseResponse.success(appService.deleteApp(id) == 1);
    }
}
