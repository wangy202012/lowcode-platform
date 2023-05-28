package com.robin.lowcodemanager.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "application", autoResultMap = true)
public class App {
    @TableId(value="app_id")
    private Long appId;
    private String appName;
    private String appPath;
    private String creator;
    // 逗号隔开
    private String managers;
    private String prodUrl;
    private Long createTime;
    private Long updateTime;
    private Integer hasDelete;
    public App(String appName,String appPath){
        this.appName = appName;
        this.appPath = appPath;
    }
}
