package com.robin.lowcodemanager.repository.impl;

import com.robin.lowcodemanager.dto.MocksReqDto;
import com.robin.lowcodemanager.dto.PageResult;
import com.robin.lowcodemanager.dto.RecordReq;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.entity.Mocks;
import com.robin.lowcodemanager.repository.AppContentRecordRepository;
import com.robin.lowcodemanager.repository.MocksRepository;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.IdsQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.sort.SortBuilder;
import org.elasticsearch.search.sort.SortBuilders;
import org.elasticsearch.search.sort.SortOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.robin.lowcodemanager.utils.Constant.INDEX_MOCKS;

@Service
public class MocksRepositoryImpl implements MocksRepository {

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;

//    @Override
//    public Mocks findByPath(String path) {
//        // 构建查询条件
//        NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();
//        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
//
//        boolQueryBuilder.should(QueryBuilders.termQuery("path", path));
//        queryBuilder.withFilter(boolQueryBuilder);
//        NativeSearchQuery nativeSearchQuery = queryBuilder.build();
//        SearchHits<Mocks> searchHits = elasticsearchRestTemplate.search(nativeSearchQuery, Mocks.class);
//        List<Mocks> collect = new ArrayList<>();
//        if (searchHits.getTotalHits() > 0) {
//            collect = searchHits.stream().map(SearchHit::getContent).collect(Collectors.toList());
//            return collect.get(0);
//        }
//        return null;
//    }

    @Override
    public int save(Mocks mocks) {
        Mocks save = elasticsearchRestTemplate.save(mocks);
        return save==null?0:1;
    }

    @Override
    public int update(Mocks mocks) {
    return 1;
    }

    @Override
    public int delete(String id) {
        String delete = elasticsearchRestTemplate.delete(id, Mocks.class);
        return delete!=null ? 1:0;
    }

    // id查询和条件查询分开，底层逻辑不一样
    @Override
    public Mocks findById(String id) {
        IdsQueryBuilder idsQueryBuilder = QueryBuilders.idsQuery();
        idsQueryBuilder.addIds(id);
        NativeSearchQuery query = new NativeSearchQueryBuilder().withQuery(idsQueryBuilder).build();
        SearchHit<Mocks> searchOne = elasticsearchRestTemplate.searchOne(query, Mocks.class, IndexCoordinates.of(INDEX_MOCKS));
        Mocks content = searchOne.getContent();
        return content;
    }

    @Override
    public PageResult<Mocks> findListByCondition(MocksReqDto mocksReqDto) {
        // 构建查询条件
        NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();
//        queryBuilder.withPageable(PageRequest.of(recordReq.getPageIndex() - 1, recordReq.getPageSize()));
//        queryBuilder.withSorts(SortBuilders.fieldSort("updateTime").order(SortOrder.DESC));

        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
//        if (recordReq.getTypeList().size()>0) {
//            BoolQueryBuilder boolQueryBuilder1 = QueryBuilders.boolQuery();
//            recordReq.getTypeList().forEach(type->{
//                boolQueryBuilder1.should(QueryBuilders.termQuery("type", type));
//            });
//            boolQueryBuilder.must(boolQueryBuilder1);
//        }
//        if (recordReq.getAppId() != null) {
//            boolQueryBuilder.must(QueryBuilders.termQuery("appId", recordReq.getAppId()));
//        }
        if(mocksReqDto.getPath()!=null && mocksReqDto.getPath()!="") {

            boolQueryBuilder.must(QueryBuilders.wildcardQuery("path.keyword", mocksReqDto.getPath() ));
//            boolQueryBuilder.must(QueryBuilders.termQuery("path", mocksReqDto.getPath()));
        }
        if(mocksReqDto.getId()!=null && mocksReqDto.getId()!="") {
            boolQueryBuilder.must(QueryBuilders.wildcardQuery("path.id", mocksReqDto.getId() ));
//            boolQueryBuilder.must(QueryBuilders.termQuery("path", mocksReqDto.getPath()));
        }
        queryBuilder.withFilter(boolQueryBuilder);


        // 按照更新时间降序

        queryBuilder.withSorts(SortBuilders.fieldSort("updateTime").order(SortOrder.DESC));

        NativeSearchQuery nativeSearchQuery = queryBuilder.build();

        SearchHits<Mocks> searchHits = elasticsearchRestTemplate.search(nativeSearchQuery, Mocks.class);
        List<Mocks> collect = new ArrayList<>();
        if (searchHits.getTotalHits() > 0) {
            collect = searchHits.stream().map(SearchHit::getContent).collect(Collectors.toList());
        }

        PageResult<Mocks> pageResult = new PageResult<>();
        pageResult.setList(collect);
        pageResult.setTotal(searchHits.getTotalHits());
//        pageResult.setPageIndex(recordReq.getPageIndex());
//        pageResult.setPageSize(recordReq.getPageSize());
        return pageResult;
    }



}
