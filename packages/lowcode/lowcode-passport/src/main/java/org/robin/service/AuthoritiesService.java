package org.robin.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.robin.dto.PageParam;
import org.robin.dto.PageResult;
import org.robin.entity.Authorities;
import org.robin.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class AuthoritiesService extends ServiceImpl<BaseMapper<Authorities>,Authorities> {
    public PageResult<Authorities> getList(PageParam pageParam){
        QueryWrapper<Authorities> queryWrapper = new QueryWrapper<>();
        Page<Authorities> page = this.page(new Page<>(pageParam.getPageIndex(), pageParam.getPageSize()), queryWrapper);
        List<Authorities> list = page.getRecords().stream().filter(item -> item.getAuthority().equals("ROLE_Manager") ).collect(Collectors.toList());
        return new PageResult<>(pageParam.getPageIndex(),pageParam.getPageSize(),page.getTotal(),list);
    }
}
