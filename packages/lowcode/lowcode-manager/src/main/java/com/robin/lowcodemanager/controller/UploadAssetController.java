package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.aop.ControllerWebLog;
import com.robin.lowcodemanager.dto.*;
import com.robin.lowcodemanager.entity.App;
import com.robin.lowcodemanager.entity.UploadAsset;
import com.robin.lowcodemanager.service.AppContentService;
import com.robin.lowcodemanager.service.AppService;
import com.robin.lowcodemanager.service.UploadAssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/asset")
public class UploadAssetController {
    @Autowired
    private UploadAssetService uploadAssetService;

    @Autowired
    private AppContentService appContentService;


    @GetMapping("/list")
    public BaseResponse<PageResult<UploadAsset>> getList(PageParam pageParam) {
        return BaseResponse.success(uploadAssetService.getList(pageParam));
    }

    /**
     * 1、新增post，更新put
     * 2、仅仅新增mapping不用参数，其他都要
     * */
    @PostMapping()
    public BaseResponse<Boolean> createAsset(@RequestBody UploadAsset uploadAsset) {
        return BaseResponse.success(uploadAssetService.createApp(uploadAsset) == 1);
    }

    @GetMapping("/getUsedFiles")
    public BaseResponse<List<String>> getUsedFiles(){
        return BaseResponse.success(appContentService.getUsedFiles());
    }


}
