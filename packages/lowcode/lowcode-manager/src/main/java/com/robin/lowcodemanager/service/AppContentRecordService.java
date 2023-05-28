package com.robin.lowcodemanager.service;

import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.dto.RecordReq;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.repository.AppContentRecordRepository;
import com.robin.lowcodemanager.repository.AppContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AppContentRecordService {
    @Autowired
    private AppContentRecordRepository appContentRecordRepository;

    public PageResult<AppContentRecord> getList(RecordReq recordReq) {
        PageResult<AppContentRecord> listByCondition = appContentRecordRepository.findListByCondition(recordReq);
        return listByCondition;
    }



    public Integer create(AppContentRecord appContentRecord) {
        AppContentRecord save = appContentRecordRepository.save(appContentRecord);
        return save != null ? 1 : 0;
    }
}
