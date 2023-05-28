package com.robin.lowcodemanager.repository.impl;


import com.robin.lowcodemanager.dto.AppLoggerReq;
import com.robin.lowcodemanager.dto.PageResult;


import com.robin.lowcodemanager.entity.AppLogger;
import com.robin.lowcodemanager.enums.AppLoggerPath;
import com.robin.lowcodemanager.repository.AppLoggerRepository;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.RangeQueryBuilder;
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
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppLoggerRepositoryImpl implements AppLoggerRepository {

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;

    @Override
    public PageResult<AppLogger> findListByCondition(AppLoggerReq appLoggerReq) {
        // 默认值
        appLoggerReq.setPageIndex(appLoggerReq.getPageIndex() == 0 ? 1 : appLoggerReq.getPageIndex());
        appLoggerReq.setPageSize(appLoggerReq.getPageSize() == 0 ? 10 : appLoggerReq.getPageSize());

        // 构建查询条件
        NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();
        queryBuilder.withPageable(PageRequest.of(appLoggerReq.getPageIndex() - 1, appLoggerReq.getPageSize()));
//        queryBuilder.withSorts(SortBuilders.fieldSort("time").order(SortOrder.DESC));
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
        if(appLoggerReq.getStartTime()!=null && appLoggerReq.getEndTime()!=null ){
            boolQueryBuilder.must(QueryBuilders
                    //传入时间，目标格式2020-01-02T03:17:37.638Z
                    .rangeQuery("@timestamp")
                    .from(appLoggerReq.getStartTime()).to(appLoggerReq.getEndTime()));
            System.out.println(new Date());
        }



//        if (loggerReq.getAppId() != null) {
//            boolQueryBuilder.must(QueryBuilders.termQuery("appId", loggerReq.getAppId()));
//        }
        if(appLoggerReq.getPathCode()!=null) {

            // 模糊查询用：wildcardQuery，并且前后添加*
            // 遇到 / 特殊字符，需要添加keyword
            // 两个问题耽误两个小时了

            boolQueryBuilder.must(QueryBuilders.wildcardQuery("message.keyword","*" + AppLoggerPath.getValueByCode(appLoggerReq.getPathCode()) + "*"));
        }
        queryBuilder.withFilter(boolQueryBuilder);


        NativeSearchQuery nativeSearchQuery = queryBuilder.build();

        SearchHits<AppLogger> searchHits = elasticsearchRestTemplate.search(nativeSearchQuery, AppLogger.class);
        List<AppLogger> collect = new ArrayList<>();
        if (searchHits.getTotalHits() > 0) {
            collect = searchHits.stream().map(SearchHit::getContent).collect(Collectors.toList());
        }

        PageResult<AppLogger> pageResult = new PageResult<>();
        pageResult.setList(collect);
        pageResult.setTotal(searchHits.getTotalHits());
        pageResult.setPageIndex(appLoggerReq.getPageIndex());
        pageResult.setPageSize(appLoggerReq.getPageSize());
        return pageResult;
    }



}
