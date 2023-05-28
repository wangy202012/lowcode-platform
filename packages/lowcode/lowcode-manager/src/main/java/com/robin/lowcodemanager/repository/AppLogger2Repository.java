package com.robin.lowcodemanager.repository;

import com.robin.lowcodemanager.dto.AppLogger2Req;
import com.robin.lowcodemanager.dto.AppLoggerReq;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.AppLogger;
import com.robin.lowcodemanager.entity.AppLogger2;


public interface AppLogger2Repository {
    PageResult<AppLogger2> findListByCondition(AppLogger2Req appLogger2Req);
}
