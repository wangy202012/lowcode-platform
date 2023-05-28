package org.robin.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.robin.dto.PageParam;
import org.robin.dto.PageResult;
import org.robin.entity.User;
import org.robin.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService extends ServiceImpl<BaseMapper<User>,User> {
    public PageResult<User> getList(PageParam pageParam){
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        Page<User> page = this.page(new Page<>(pageParam.getPageIndex(), pageParam.getPageSize()), queryWrapper);
        return new PageResult<>(pageParam.getPageIndex(),pageParam.getPageSize(),page.getTotal(),page.getRecords());
    }
}
