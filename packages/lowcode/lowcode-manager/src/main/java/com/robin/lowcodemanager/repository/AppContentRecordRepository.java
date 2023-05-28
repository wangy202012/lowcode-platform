package com.robin.lowcodemanager.repository;

import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.dto.RecordReq;
import com.robin.lowcodemanager.entity.App;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.AppContentRecord;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

// 复杂的ES操作，不用默认接口
public interface AppContentRecordRepository   {

    PageResult<AppContentRecord> findListByCondition(RecordReq recordReq);
    AppContentRecord save(AppContentRecord appContentRecord);
}
