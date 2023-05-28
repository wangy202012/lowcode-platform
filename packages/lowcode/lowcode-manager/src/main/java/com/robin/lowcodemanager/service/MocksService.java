package com.robin.lowcodemanager.service;

import com.robin.lowcodemanager.config.TokenConfig;
import com.robin.lowcodemanager.dto.AppContentExt;
import com.robin.lowcodemanager.dto.MocksReqDto;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.entity.Mocks;
import com.robin.lowcodemanager.repository.AppContentRepository;
import com.robin.lowcodemanager.repository.MocksRepository;
import com.robin.lowcodemanager.utils.RedisUtils;
import com.robin.lowcodemanager.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class MocksService {
    @Autowired
    private MocksRepository mocksRepository;


    public  PageResult<Mocks>  getList(MocksReqDto mocksReqDto) {
        return mocksRepository.findListByCondition(mocksReqDto);
    }


    public Integer create(MocksReqDto mocksReqDto) {
        Mocks mocks = new Mocks();
        // java生成id，不用es生成
        mocks.setId(Utils.getRandomStr(10));
        mocks.setName(mocksReqDto.getName());
        mocks.setEngName(mocksReqDto.getEngName());
        mocks.setPath(mocksReqDto.getPath());
        mocks.setDesc(mocksReqDto.getDesc());
        mocks.setContent(mocksReqDto.getContent());
        mocks.setCreator(TokenConfig.getUserName());
        mocks.setManagers(TokenConfig.getUserName());
        mocks.setUpdater(TokenConfig.getUserName());
        mocks.setCreateTime(new Date().getTime());
        mocks.setUpdateTime(new Date().getTime());

        return mocksRepository.save(mocks);
    }


    public int delete(String id){
        return mocksRepository.delete(id);
    }

    public Mocks getById(String id) {
    return mocksRepository.findById(id);
    }

    public Mocks getByPath(String path) {
        PageResult<Mocks> listByCondition = mocksRepository.findListByCondition(null);
        return listByCondition.getList().get(0);
    }

    public Integer update(String id, Mocks mocks) {
        Mocks oldMock = mocksRepository.findById(id);

        oldMock.setName(mocks.getName());
        oldMock.setEngName(mocks.getEngName());
        oldMock.setPath(mocks.getPath());
        oldMock.setDesc(mocks.getDesc());
        oldMock.setManagers(mocks.getManagers());
        oldMock.setContent(mocks.getContent());

        oldMock.setUpdater(TokenConfig.getUserName());
        oldMock.setUpdateTime(new Date().getTime());


        int ret = 0;
        // 1、更新内容表
          mocksRepository.save(oldMock);

        return ret;
    }
}
