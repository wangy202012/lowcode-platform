package com.robin.lowcodemanager.repository.impl;

import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.dto.RecordReq;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.repository.AppContentRecordRepository;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.sort.SortBuilders;
import org.elasticsearch.search.sort.SortOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppContentRecordRepositoryImpl implements AppContentRecordRepository {

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;



    @Override
    public PageResult<AppContentRecord> findListByCondition(RecordReq recordReq) {
        // 默认值
        recordReq.setPageIndex(recordReq.getPageIndex() == 0 ? 1 : recordReq.getPageIndex());
        recordReq.setPageSize(recordReq.getPageSize() == 0 ? 10 : recordReq.getPageSize());

        // 构建查询条件
        NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();
        queryBuilder.withPageable(PageRequest.of(recordReq.getPageIndex() - 1, recordReq.getPageSize()));
        queryBuilder.withSorts(SortBuilders.fieldSort("updateTime").order(SortOrder.DESC));

        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
        if (recordReq.getTypeList().size()>0) {
            BoolQueryBuilder boolQueryBuilder1 = QueryBuilders.boolQuery();
            recordReq.getTypeList().forEach(type->{
                boolQueryBuilder1.should(QueryBuilders.termQuery("type", type));
            });
            boolQueryBuilder.must(boolQueryBuilder1);
        }
        if (recordReq.getAppId() != null) {
            boolQueryBuilder.must(QueryBuilders.termQuery("appId", recordReq.getAppId()));
        }
        queryBuilder.withFilter(boolQueryBuilder);

        NativeSearchQuery nativeSearchQuery = queryBuilder.build();

        SearchHits<AppContentRecord> searchHits = elasticsearchRestTemplate.search(nativeSearchQuery, AppContentRecord.class);
        List<AppContentRecord> collect = new ArrayList<>();
        if (searchHits.getTotalHits() > 0) {
            collect = searchHits.stream().map(SearchHit::getContent).collect(Collectors.toList());
        }

        PageResult<AppContentRecord> pageResult = new PageResult<>();
        pageResult.setList(collect);
        pageResult.setTotal(searchHits.getTotalHits());
        pageResult.setPageIndex(recordReq.getPageIndex());
        pageResult.setPageSize(recordReq.getPageSize());
        return pageResult;
    }


    @Override
    public AppContentRecord save(AppContentRecord appContentRecord) {
        AppContentRecord save = elasticsearchRestTemplate.save(appContentRecord);
        return save;
    }
}
