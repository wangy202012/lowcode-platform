package org.robin.repository;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.robin.entity.Authorities;
import org.robin.entity.User;

@Mapper
public interface AuthoritiesMapper extends BaseMapper<Authorities> {
}
