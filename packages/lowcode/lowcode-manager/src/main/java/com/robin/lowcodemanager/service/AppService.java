package com.robin.lowcodemanager.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.robin.lowcodemanager.config.TokenConfig;
import com.robin.lowcodemanager.dto.AppExt;
import com.robin.lowcodemanager.dto.AppReqDto;
import com.robin.lowcodemanager.dto.PageParam;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.App;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.enums.RecordType;
import com.robin.lowcodemanager.repository.AppContentRecordRepository;
import com.robin.lowcodemanager.repository.AppContentRepository;
import com.robin.lowcodemanager.repository.AppMapper;
import com.robin.lowcodemanager.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
public class AppService extends ServiceImpl<BaseMapper<App>, App> {
    @Autowired
    private AppMapper appMapper;
    @Autowired
    private AppContentRepository appContentRepository;

    @Autowired
    private AppContentRecordRepository appContentRecordRepository;

    public PageResult<App> getList(AppReqDto appReqDto) {
        QueryWrapper<App> queryWrapper = new QueryWrapper<>();
        queryWrapper.orderByDesc("update_time");
        queryWrapper.eq("has_delete", 0);
        queryWrapper.like(appReqDto.getAppName() !=null && appReqDto.getAppName()!="","app_name",appReqDto.getAppName());
        queryWrapper.like(appReqDto.getAppPath() !=null && appReqDto.getAppPath()!="","app_path",appReqDto.getAppPath());
        queryWrapper.like(appReqDto.getAppId() !=null && appReqDto.getAppId()!="","app_id",appReqDto.getAppId());
        Page<App> page = this.page(new Page<>(appReqDto.getPageIndex(), appReqDto.getPageSize()), queryWrapper);
        return new PageResult(appReqDto.getPageIndex(), appReqDto.getPageSize(), page.getTotal(), page.getRecords());
    }

    public List<String> getAppPathList(Long exceptId) {
        QueryWrapper<App> queryWrapper = new QueryWrapper<>();
        queryWrapper.ne("app_id",exceptId);
        List<App> apps = appMapper.selectList(queryWrapper);
        return apps.stream().map(app -> app.getAppPath()).collect(Collectors.toList());
    }

    public Integer createApp(AppExt app, String content) {
        Long maxId = getMaxId();
        Long appId = maxId + 1;
        app.setAppId(appId);
        app.setCreator(TokenConfig.getUserName());
        app.setCreateTime(new Date().getTime());
        app.setUpdateTime(new Date().getTime());
//        app.setManagers(TokenConfig.getUserName());
        int insert = appMapper.insert(app);
        if (insert == 1) {
            if(content!=null && content!=""){
                app.setContent(content);
            }
            // 插入初始化应用内容数据
            AppContent appContent = new AppContent(appId, TokenConfig.getUserName(), app.getContent());
            appContentRepository.save(appContent);
            // 插入初始化记录
            AppContentRecord appContentRecord = new AppContentRecord(Utils.getRandomStr(10), appId, RecordType.SAVE.getValue(), "", "", TokenConfig.getUserName(), new Date().getTime(), app.getContent());
            appContentRecordRepository.save(appContentRecord);
        }
        return insert;
    }

    public App getAppByPath(String path) {
        QueryWrapper<App> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("app_path", path);
        queryWrapper.orderByDesc("update_time");

        List<App> apps = appMapper.selectList(queryWrapper);
        if (apps == null || apps.size() == 0) {
            return null;
        }
        return apps.get(0);
    }


    public Integer copyApp(Long id) {
        App app =  appMapper.selectById(id);
        AppExt appExt = new AppExt(app.getAppName() + "_copy_"+new Date().getTime(),app.getAppPath() + "_copy_"+new Date().getTime());
        appExt.setManagers(TokenConfig.getUserName());
        appExt.setCreator(TokenConfig.getUserName());
        Optional<AppContent> byId = appContentRepository.findById(id);
        AppContent appContent = null;
        try {
            appContent = byId.get();
        } catch (Exception e) {
            appContent = new AppContent(id, TokenConfig.getUserName(), null);
        }
        return createApp(appExt, appContent.getContent());
    }


    public Integer updateApp(Long id, App app) {
        app.setAppId(id);
        app.setUpdateTime(new Date().getTime());
        return appMapper.updateById(app);
    }


    public Integer deleteApp(Long id) {
        App app = new App();
        app.setAppId(id);
        app.setHasDelete(1);
        // 更新hasDelete标识
        int del = appMapper.updateById(app);
        return del;
    }

    public Long getMaxId() {
        Long num = appMapper.getMaxId();
        if (num == null) {
            num = 100000L;
        }
        return num;
    }
}
