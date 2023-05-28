package com.robin.lowcodemanager.service;

import com.robin.lowcodemanager.dto.AppLogger2Req;
import com.robin.lowcodemanager.dto.AppLoggerReq;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.entity.AppLogger;
import com.robin.lowcodemanager.entity.AppLogger2;
import com.robin.lowcodemanager.repository.AppLogger2Repository;
import com.robin.lowcodemanager.repository.AppLoggerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AppLogger2Service {
    @Autowired
    private AppLogger2Repository appLogger2Repository;

    public PageResult<AppLogger2> getList(AppLogger2Req appLogger2Req) {
        PageResult<AppLogger2> listByCondition = appLogger2Repository.findListByCondition(appLogger2Req);
        return listByCondition;
    }
}
