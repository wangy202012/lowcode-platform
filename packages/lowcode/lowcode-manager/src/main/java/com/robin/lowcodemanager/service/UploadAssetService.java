package com.robin.lowcodemanager.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.robin.lowcodemanager.config.TokenConfig;

import com.robin.lowcodemanager.dto.PageParam;
import com.robin.lowcodemanager.dto.PageResult;

import com.robin.lowcodemanager.entity.UploadAsset;


import com.robin.lowcodemanager.repository.UploadAssetMapper;
import com.robin.lowcodemanager.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;



@Service
public class UploadAssetService extends ServiceImpl<BaseMapper<UploadAsset>, UploadAsset> {
    @Autowired
    private UploadAssetMapper uploadAssetMapper;
    public PageResult<UploadAsset> getList(PageParam pageParam) {
        QueryWrapper<UploadAsset> queryWrapper = new QueryWrapper<>();
       queryWrapper.orderByDesc("create_time");
        Page<UploadAsset> page = this.page(new Page<>(pageParam.getPageIndex(), pageParam.getPageSize()), queryWrapper);
        return new PageResult(pageParam.getPageIndex(), pageParam.getPageSize(), page.getTotal(), page.getRecords());
    }

    public Integer createApp(UploadAsset uploadAsset) {
        uploadAsset.setAssetId(Utils.getRandomStr(9));
        uploadAsset.setCreator(TokenConfig.getUserName());
        uploadAsset.setCreateTime(new Date().getTime());
        return uploadAssetMapper.insert(uploadAsset);
    }

}
