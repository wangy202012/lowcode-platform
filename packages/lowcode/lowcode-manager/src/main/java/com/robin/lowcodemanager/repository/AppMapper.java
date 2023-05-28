package com.robin.lowcodemanager.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.robin.lowcodemanager.entity.App;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AppMapper extends BaseMapper<App> {
    public Long getMaxId();
}
