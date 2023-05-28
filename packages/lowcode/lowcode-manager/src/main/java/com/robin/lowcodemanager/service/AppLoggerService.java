package com.robin.lowcodemanager.service;

import com.robin.lowcodemanager.config.TokenConfig;
import com.robin.lowcodemanager.dto.AppContentExt;
import com.robin.lowcodemanager.dto.AppLoggerReq;

import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.entity.AppLogger;

import com.robin.lowcodemanager.repository.AppContentRepository;
import com.robin.lowcodemanager.repository.AppLoggerRepository;

import com.robin.lowcodemanager.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class AppLoggerService {
    @Autowired
    private AppLoggerRepository appLoggerRepository;

    public PageResult<AppLogger> getList(AppLoggerReq appLoggerReq) {
        PageResult<AppLogger> listByCondition = appLoggerRepository.findListByCondition(appLoggerReq);
        return listByCondition;
    }
}
