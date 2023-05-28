package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.aop.ControllerWebLog;
import com.robin.lowcodemanager.dto.BaseResponse;
import com.robin.lowcodemanager.dto.MocksReqDto;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.App;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.Mocks;
import com.robin.lowcodemanager.service.AppContentService;
import com.robin.lowcodemanager.service.AppService;
import com.robin.lowcodemanager.service.MocksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/mocks")
// 和AppContentController类似，不用登录
public class MocksController {
    @Autowired
    private MocksService mocksService;


    @GetMapping("/list")
    public BaseResponse<PageResult<Mocks>> getList(MocksReqDto mocksReqDto) {
        return BaseResponse.success(mocksService.getList(mocksReqDto));
    }


    @PostMapping
    public BaseResponse<Boolean> createMocks(@RequestBody MocksReqDto mocksReqDto) {
        Integer integer = mocksService.create(mocksReqDto);
        return BaseResponse.success(integer == 1);
    }

    @PutMapping("/{id}")
    public BaseResponse<Boolean> updateMocks(@PathVariable(name = "id") String id, @RequestBody Mocks mocks) {
        Integer integer = mocksService.update(id,mocks);
        return BaseResponse.success(integer == 1);
    }


    @PostMapping("/getData")
    public BaseResponse<String> getData(@RequestBody MocksReqDto mocksReqDto) {
        PageResult<Mocks> page = mocksService.getList(mocksReqDto);
        if(page.getList().size()==0) return BaseResponse.success(null);
        Mocks mocks = page.getList().get(0);
        return BaseResponse.success("SUCCESS",mocks.getContent());
    }


    @GetMapping("/{id}")
    public BaseResponse<Mocks> getById(@PathVariable(name = "id") String id) {
        Mocks mock = mocksService.getById(id);
        return BaseResponse.success(mock);
    }

//    @GetMapping("/path/{path}")
//    @ControllerWebLog(name = "渲染应用内容(path)")
//    public BaseResponse<AppContent> getByPath(@PathVariable(name = "path") String path) {
//        // 先获取id
//        App app = appService.getAppByPath(path);
//        if (app == null) {
//            return BaseResponse.error("没找到应用");
//        }
//        AppContent appContent = appContentService.getById(app.getAppId());
//        return BaseResponse.success(appContent);
//    }


    @DeleteMapping("/{id}")

    public BaseResponse<Boolean> deleteMocks(@PathVariable(name = "id") String id) {
        return BaseResponse.success(mocksService.delete(id) == 1);
    }
}
