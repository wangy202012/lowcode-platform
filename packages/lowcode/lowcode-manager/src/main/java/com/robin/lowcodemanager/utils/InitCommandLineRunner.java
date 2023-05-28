package com.robin.lowcodemanager.utils;

import com.robin.lowcodemanager.dto.AppExt;
import com.robin.lowcodemanager.entity.App;
import com.robin.lowcodemanager.service.AppService;
import org.elasticsearch.client.ElasticsearchClient;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.client.indices.CreateIndexRequest;
import org.elasticsearch.client.indices.CreateIndexResponse;
import org.elasticsearch.client.indices.GetIndexRequest;
import org.elasticsearch.client.indices.GetIndexResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

import static com.robin.lowcodemanager.utils.Constant.INDEX_CONTENT;
import static com.robin.lowcodemanager.utils.Constant.INDEX_RECORD;

@Component
public class InitCommandLineRunner implements CommandLineRunner {

    @Autowired
    public AppService appService;

    @Autowired
    RestHighLevelClient restHighLevelClient;

    @Override
    public void run(String... args) throws Exception {
        // 确保索引存在
        System.out.println("检验索引是否存在");
        GetIndexRequest request = new GetIndexRequest(INDEX_CONTENT);
        try {
            restHighLevelClient.indices().get(request, RequestOptions.DEFAULT);
            System.out.println("索引已存在:" + INDEX_CONTENT);
        } catch (Exception e) {
            System.out.println("暂无索引:" + INDEX_CONTENT);
            CreateIndexRequest createIndexRequest = new CreateIndexRequest(INDEX_CONTENT);
            restHighLevelClient.indices().create(createIndexRequest, RequestOptions.DEFAULT);
            System.out.println("索引新建成功:" + INDEX_CONTENT);
        }


        GetIndexRequest request2 = new GetIndexRequest(INDEX_RECORD);
        try {
            restHighLevelClient.indices().get(request2, RequestOptions.DEFAULT);
            System.out.println("索引已存在:" + INDEX_RECORD);
        } catch (Exception e) {
            System.out.println("暂无索引:" + INDEX_RECORD);
            CreateIndexRequest createIndexRequest2 = new CreateIndexRequest(INDEX_RECORD);
            restHighLevelClient.indices().create(createIndexRequest2, RequestOptions.DEFAULT);
            System.out.println("索引新建成功:" + INDEX_RECORD);
        }


        System.out.println("初始化数据库");
//        List<App> list = appService.getList();
//        if (list.size() == 0) {
//            AppExt app1 = new AppExt("应用1", "/app1");
//            AppExt app2 = new AppExt("应用2", "/app2");
//            appService.createApp(app1, null);
//            appService.createApp(app2, null);
//        }
    }
}
