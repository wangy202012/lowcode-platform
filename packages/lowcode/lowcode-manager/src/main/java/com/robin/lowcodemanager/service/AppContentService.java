package com.robin.lowcodemanager.service;

import com.robin.lowcodemanager.config.TokenConfig;
import com.robin.lowcodemanager.dto.AppContentExt;
import com.robin.lowcodemanager.entity.AppContent;
import com.robin.lowcodemanager.entity.AppContentRecord;
import com.robin.lowcodemanager.repository.AppContentRepository;
import com.robin.lowcodemanager.utils.Constant;
import com.robin.lowcodemanager.utils.RedisUtils;
import com.robin.lowcodemanager.utils.URIDecoder;
import com.robin.lowcodemanager.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Service
public class AppContentService {
    @Autowired
    private AppContentRepository appContentRepository;
    @Autowired
    private AppContentRecordService appContentRecordService;
    @Autowired
    RedisUtils redisUtils;

    private static final String FILE_REGEX = "files/[a-z0-9-]{36}.\\w+";

    public List<AppContent> getList() {
        List<AppContent> list = new ArrayList<>();
        Iterable<AppContent> iterable = appContentRepository.findAll();
        iterable.forEach(list::add);
        return list;
    }

    public Integer create(AppContent appContent) {
        AppContent save = appContentRepository.save(appContent);
        return save != null ? 1 : 0;
    }

    public String lockApp(Long id,String ip){
        String userName = TokenConfig.getUserName()+ "-" + ip;
        String name = redisUtils.lockApp("" + id, userName, 30);
        // 返回0表示获取锁成功，否则返回锁所有者
        if(userName.equals(name)) return "0";
        return name;
    }

    public AppContent getById(Long id) {
        Optional<AppContent> byId = appContentRepository.findById(id);
        try {
            AppContent appContent = byId.get();
            return appContent;
        } catch (Exception e) {
            return new AppContent(id,TokenConfig.getUserName(),null);
        }
    }

    public Integer updateContent(Long id, AppContent appContent) {
        appContent.setUpdater(TokenConfig.getUserName());
        int ret = 0;
        // 1、更新内容表
        AppContent save = appContentRepository.save(appContent);
        if (save != null) {
            ret = 1;
            // 2、添加历史表
            AppContentRecord appContentRecord = new AppContentRecord();
            appContentRecord.setRecordId("record_" + Utils.getRandomStr(10));
            appContentRecord.setAppId(id);
            appContentRecord.setContent(appContent.getContent());
            appContentRecord.setUpdater(TokenConfig.getUserName());
            appContentRecord.setUpdateTime(new Date().getTime());
            // 新增的三种属性
            appContentRecord.setDesc(((AppContentExt)appContent).getDesc());
            appContentRecord.setVersion(((AppContentExt) appContent).getVersion());
            appContentRecord.setType(((AppContentExt) appContent).getType());
            appContentRecordService.create(appContentRecord);
        }
        return ret;
    }

    public List<String> getUsedFiles() {
        List<String> result = new ArrayList<>();
        List<AppContent> list = getList();
        list.forEach(item->{
            String content = item.getContent();
            if(content!=null) {
                // 解析content
                String newContent = URIDecoder.decodeURIComponent(content);
                Pattern pattern = Pattern.compile(FILE_REGEX);
                Matcher matcher = pattern.matcher(newContent);
                while(matcher.find()) {
                    result.add(matcher.group());
                }
            }
        });
        return result;
    }
}
