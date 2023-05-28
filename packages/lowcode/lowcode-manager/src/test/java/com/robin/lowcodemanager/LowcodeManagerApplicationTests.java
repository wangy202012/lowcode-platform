package com.robin.lowcodemanager;

import com.robin.lowcodemanager.dto.*;

import com.robin.lowcodemanager.entity.*;

import com.robin.lowcodemanager.enums.AppLoggerPath;
import com.robin.lowcodemanager.repository.AppContentRecordRepository;
import com.robin.lowcodemanager.repository.AppContentRepository;
import com.robin.lowcodemanager.repository.AppMapper;
import com.robin.lowcodemanager.service.*;

import com.robin.lowcodemanager.utils.RedisUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@SpringBootTest
class LowcodeManagerApplicationTests {

    @Autowired
    private AppService appService;

    @Autowired
    private AppContentService appContentService;

    @Autowired
    private AppContentRecordService appContentRecordService;



    @Autowired
    private AppMapper appMapper;

    @Autowired
    private AppContentRepository appContentRepository;
    @Autowired
    private AppContentRecordRepository appContentRecordRepository;

    @Autowired
    private AppLoggerService appLoggerService;

    @Autowired
    private MocksService mocksService;

    @Autowired
    private UploadAssetService uploadAssetService;

    @Autowired
    private RedisUtils redisUtils;
//    @Test
//    void contextLoads() {
//    }
//    @Test
//    public void testGetMaxId(){
//        Long maxId = appService.getMaxId();
//        System.out.println("maxId:"+maxId);
//    }


    /**
     * 获取列表
     * */
//    @Test
//    public void testList(){
//        List<App> list = appService.getList();
//        list.forEach(item-> System.out.println("item:"+item.toString()));
//    }


    // http://tencent:9200/application_content/_search
//    @Test
//    public void testListContent(){
//        List<AppContent> list = appContentService.getList();
//        list.forEach(item-> System.out.println("保存内容:"+item.toString()));
//    }

    // http://tencent:9200/application_content_record/_search
    // @Test
    // public void testListContentRecord(){
    //     RecordReq recordReq = new RecordReq();
    //     recordReq.setAppId(100000L);
    //     List<Integer> list = new ArrayList<>();
    //     list.add(2);
    //     list.add(1);
    //     recordReq.setType(list);
    //     PageResult<AppContentRecord> pageResult = appContentRecordService.getList(recordReq);
    //     AtomicInteger cnt = new AtomicInteger();
    //     pageResult.getList().forEach(item-> System.out.println("保存记录:"+(cnt.getAndIncrement())+" /"+item.toString()));
    // }

//    @Test
//    public void testLogger(){
//        AppLoggerReq appLoggerReq = new AppLoggerReq();
//        appLoggerReq.setStartTime("2023-05-01T17:27:13.000Z");
//        appLoggerReq.setEndTime("2023-06-01T18:27:13.000Z");
//        appLoggerReq.setPathCode(AppLoggerPath.GET_USER_NAME.getCode());
//        PageResult<AppLogger> list1 = appLoggerService.getList(appLoggerReq);
//        System.out.println("list1:"+list1);
//        list1.getList().forEach(item->System.out.println("item:"+item.toString()));
//    }



//    @Test
//    public void testMocks(){
//        MocksReqDto mocksReqDto = new MocksReqDto();
//        mocksReqDto.setName("name");
//        mocksReqDto.setPath("/a/b/c");
//        mocksReqDto.setDesc("desc");
//        mocksReqDto.setContent("{}");
//        Integer integer = mocksService.create(mocksReqDto);
//        System.out.println("保存结果："+integer);
//    }

//    @Test
//    public void testMocks2(){
//        PageResult<Mocks> ret = mocksService.getList(null);
//        System.out.println("返回结果:"+ret.getList());
//    }


//    @Test
//    public void testGetApppathList(){
//        List<String> appPathList = appService.getAppPathList(100001L);
//        System.out.println("列表为:"+appPathList);
//    }

    // @Test
    // public void testUsedFiles(){
    //     List<String> usedImgs = appContentService.getUsedFiles();
    //     System.out.println("被引用的文件:" + usedImgs);
    // }



//    @Test
//    public void testRedis(){
//        String ret = redisUtils.lockApp("100001", "robin",30);
//        System.out.println("锁占有者:"+ret);
//    }


//    @Test
//    public void testInsert(){
//        AppExt app = new AppExt("应用-"+new Date().getTime(),"lc-template-"+ new Date().getTime());
//        int ret = appService.createApp(app,"aaa");
//        System.out.println("新建结果:"+ret);
//    }

//    @Test
//    public void testInsertEs(){
//        AppContent appContent = new AppContent();
//        appContent.setContent("{}");
//        Integer ret = appContentService.create(appContent);
//        System.out.println("新建结果:"+ret);
//    }



//    @Test
//    public void getAssetList(){
//        PageResult<UploadAsset> list = uploadAssetService.getList(new PageParam());
//        System.out.println(list);
//    }


//    @Test
//    public void createAsset(){
//        UploadAsset uploadAsset = new UploadAsset();
//        uploadAsset.setAssetName("test.jpg");
//        uploadAsset.setAssetPath("/adfef/asdfef/test.jpg");
//
//        Integer app = uploadAssetService.createApp(uploadAsset);
//        System.out.println("增加结果:"+app);
//    }

//    @Test
//    public void testDeleteAll(){
//        List<App> apps = appMapper.selectList(null);
//        if(apps.size()!=0){
//            List<Long> idList = new ArrayList<>();
//            for (App item : apps) {
//                Long appId = item.getAppId();
//                idList.add(appId);
//            }
//            appMapper.deleteBatchIds(idList);
//        }
//        appContentRepository.deleteAll();
//        appContentRecordRepository.deleteAll();
//    }

}
