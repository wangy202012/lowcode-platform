package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.aop.ControllerWebLog;
import com.robin.lowcodemanager.dto.BaseResponse;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.dto.AppContentExt;
import com.robin.lowcodemanager.service.AppContentService;
import com.robin.lowcodemanager.utils.IpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin("*")
@RestController
@RequestMapping("/content")
public class AppContentController {


    @Autowired
    private AppContentService appContentService;

    @GetMapping("/{id}")
    @ControllerWebLog(name = "获取内容")
    public BaseResponse<AppContent> getById(@PathVariable(name = "id") Long id) {
        AppContent appContent = appContentService.getById(id);

        return  BaseResponse.success(appContent);
    }


    @GetMapping("/lock/{id}")
    public BaseResponse<String> lockApp(HttpServletRequest request, @PathVariable(name = "id") Long id) {
        String ipAddr = IpUtil.getIpAddr(request);
        return  BaseResponse.success("成功",appContentService.lockApp(id,ipAddr));
    }




    /**
     * 更新的参数有两类：params和body
     * body 不能为字符串，所以封装成对象了
     * */
    @PutMapping("/{id}")
    @ControllerWebLog(name = "更新内容")
    public BaseResponse<Boolean> updateContent(@PathVariable(name = "id") Long id, @RequestBody AppContentExt content) {
        return BaseResponse.success(appContentService.updateContent(id,content) == 1);
    }

}
