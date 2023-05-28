package com.robin.lowcodemanager.repository;


import com.robin.lowcodemanager.dto.MocksReqDto;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.dto.RecordReq;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.entity.Mocks;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface MocksRepository  {
//    Mocks findByPath(String path);

    int save(Mocks mocks);

    int update(Mocks mocks);


    int delete(String id);

//    Mocks findById(Long id);

    PageResult<Mocks> findListByCondition(MocksReqDto mocksReqDto);
    Mocks findById(String id);


}
