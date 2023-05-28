package com.robin.lowcodemanager.repository.impl;


import com.robin.lowcodemanager.dto.AppLogger2Req;

import com.robin.lowcodemanager.dto.PageResult;

import com.robin.lowcodemanager.entity.AppLogger2;

import com.robin.lowcodemanager.repository.AppLogger2Repository;

import org.elasticsearch.index.query.BoolQueryBuilder;
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
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppLogger2RepositoryImpl implements AppLogger2Repository{

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;

    @Override
    public PageResult<AppLogger2> findListByCondition(AppLogger2Req appLoggerReq) {
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

        }

//        if(appLoggerReq.getMinTakeTime()>0 ) {
//            boolQueryBuilder.must(QueryBuilders.rangeQuery("takeTime").from(appLoggerReq.getMinTakeTime()+"").to(1000000+""));
//        }


        if (appLoggerReq.getUserName() != null && appLoggerReq.getUserName() !="") {
            boolQueryBuilder.must(QueryBuilders.wildcardQuery("userName.keyword", "*"+appLoggerReq.getUserName() +"*"));
        }

        if (appLoggerReq.getMethodName() != null && appLoggerReq.getMethodName()!="") {
            boolQueryBuilder.must(QueryBuilders.wildcardQuery("methodName.keyword", "*"+appLoggerReq.getMethodName() +"*"));
        }


//        if(appLoggerReq.getPathCode()!=null) {
//
//            // 模糊查询用：wildcardQuery，并且前后添加*
//            // 遇到 / 特殊字符，需要添加keyword
//            // 两个问题耽误两个小时了
//
//            boolQueryBuilder.must(QueryBuilders.wildcardQuery("message.keyword","*" + AppLoggerPath.getValueByCode(appLoggerReq.getPathCode()) + "*"));
//        }
        // methodName 不能为空
        boolQueryBuilder.must(QueryBuilders.existsQuery("methodName"));
        queryBuilder.withFilter(boolQueryBuilder);
        // 按照更新时间降序

        queryBuilder.withSorts(SortBuilders.fieldSort("currentDateTime").order(SortOrder.DESC));


        NativeSearchQuery nativeSearchQuery = queryBuilder.build();

        SearchHits<AppLogger2> searchHits = elasticsearchRestTemplate.search(nativeSearchQuery, AppLogger2.class);
        List<AppLogger2> collect = new ArrayList<>();
        if (searchHits.getTotalHits() > 0) {
            collect = searchHits.stream().map(SearchHit::getContent).collect(Collectors.toList());
        }

        PageResult<AppLogger2> pageResult = new PageResult<>();
        pageResult.setList(collect);
        pageResult.setTotal(searchHits.getTotalHits());
        pageResult.setPageIndex(appLoggerReq.getPageIndex());
        pageResult.setPageSize(appLoggerReq.getPageSize());
        return pageResult;
    }



}
