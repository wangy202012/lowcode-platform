package com.robin.lowcodemanager.enums;

import lombok.Getter;

@Getter
public enum AppLoggerPath {
    ALL("全部请求","/__api/","0"),
    GET_USER_NAME("获取用户名称","GET /__api/common/getUsername","1"),
    GET_APP_LIST("查询应用列表","GET /__api/app/list","2"),
    GET_APP_CONTENT("查询应用内容","GET /__api/content/","3"),
    PUT_APP_CONTENT("保存应用内容","PUT /__api/content/","4"),
    PUT_APP("编辑应用","PUT /__api/app/","5")
    ;


    private final String label;
    private final String value;
    private final String code;

    AppLoggerPath(String label,String value,String code){
        this.label = label;
        this.value = value;
        this.code = code;
    }

    public static String getValueByCode(String code){
        for(AppLoggerPath item:AppLoggerPath.values()){
            if(item.getCode().equals(code)){
                return item.getValue();
            }
        }
        return null;
    }
}
