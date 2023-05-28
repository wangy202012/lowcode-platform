package org.robin.controller;

import org.robin.dto.BaseResponse;
import org.robin.dto.PageParam;
import org.robin.dto.PageResult;
import org.robin.entity.Authorities;
import org.robin.entity.User;
import org.robin.service.AuthoritiesService;
import org.robin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/authorities")
public class AuthoritiesController {

    @Autowired
    private AuthoritiesService authoritiesService;

    // http://localhost:10043/passport/authorities/list
    @GetMapping("/list")
    public BaseResponse<PageResult<Authorities>> getList(PageParam pageParam) {
        PageResult<Authorities> list = authoritiesService.getList(pageParam);
        return  BaseResponse.success(list);
    }
}
