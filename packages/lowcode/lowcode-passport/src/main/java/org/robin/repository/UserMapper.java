package org.robin.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.robin.entity.User;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
