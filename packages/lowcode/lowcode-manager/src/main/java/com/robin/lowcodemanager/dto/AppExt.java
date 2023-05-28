package com.robin.lowcodemanager.dto;

import com.robin.lowcodemanager.entity.App;
import lombok.Data;

@Data
public class AppExt extends App {

    public AppExt(String appName, String appPath) {
        super(appName, appPath);
    }

    private String content;
}
