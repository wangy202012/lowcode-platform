package org.robin.controller;

import org.robin.dto.BaseResponse;
import org.robin.dto.PageParam;
import org.robin.dto.PageResult;
import org.robin.entity.User;
import org.robin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    // http://localhost:10043/passport/user/list
    @GetMapping("/list")
    public BaseResponse<PageResult<User>> getList( PageParam pageParam) {
        PageResult<User> list = userService.getList(pageParam);
        return  BaseResponse.success(list);
    }
}
