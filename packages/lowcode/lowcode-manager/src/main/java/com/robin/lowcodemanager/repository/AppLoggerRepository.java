package com.robin.lowcodemanager.repository;

import com.robin.lowcodemanager.dto.AppLoggerReq;

import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.AppLogger;


public interface AppLoggerRepository   {
    PageResult<AppLogger> findListByCondition(AppLoggerReq appLoggerReq);
}
