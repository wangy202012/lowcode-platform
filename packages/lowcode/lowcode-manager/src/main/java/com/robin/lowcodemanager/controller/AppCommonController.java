package com.robin.lowcodemanager.controller;

import com.robin.lowcodemanager.config.EnumsConfig;
import com.robin.lowcodemanager.config.TokenConfig;
import com.robin.lowcodemanager.dto.BaseResponse;
import com.robin.lowcodemanager.dto.EnumItemRespDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/common")

public class AppCommonController {

    @Autowired
    private EnumsConfig enumsConfig;
    @GetMapping("/getUsername")
    public BaseResponse<String> getUsername() {
        return BaseResponse.success("获取成功", TokenConfig.getUserName());
    }


    // https
    @GetMapping("/getEnums/{name}")
    public BaseResponse<List<EnumItemRespDto>> getEnums(@PathVariable(name="name") String name) {

        List<String> limits = enumsConfig.getLimits();
        if(!limits.contains(name)){
            return BaseResponse.error("不允许的枚举类型");
        }

        List<EnumItemRespDto> list = new ArrayList<>();
        try {
            Class<?> clz = Class.forName("com.robin.lowcodemanager.enums." + name);
            Object[] objects = clz.getEnumConstants();
            Method getLabel =  clz.getMethod("getLabel");
            Method getValue  = clz.getMethod("getValue");
            // 特殊情况才存在
            Method getCode = clz.getMethod("getCode");
            for(Object obj:objects){
                EnumItemRespDto enumItemRespDto = new EnumItemRespDto((String) getLabel.invoke(obj),getValue.invoke(obj), (String) getCode.invoke(obj));
                list.add(enumItemRespDto);
            }
            return BaseResponse.success(list);
        } catch (Exception e) {
            return BaseResponse.error("枚举类型有误");
        }

    }
}
