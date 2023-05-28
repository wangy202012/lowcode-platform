package com.robin.lowcodemanager.utils;

import com.robin.lowcodemanager.dto.BaseResponse;
import org.springframework.security.oauth2.common.exceptions.UnauthorizedClientException;
import org.springframework.security.oauth2.common.exceptions.UnauthorizedUserException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public BaseResponse<Object> exceptionHandler(HttpServletRequest request,Exception exception) {
        BaseResponse<Object> baseResponse = new BaseResponse<>();
        baseResponse.setCode(BaseResponse.STATUS_ERROR);
        baseResponse.setMessage(exception.getMessage());
        return baseResponse;
    }


    @ExceptionHandler(UnauthorizedUserException.class)
    public BaseResponse<Object> exceptionHandler2(HttpServletRequest request,Exception exception) {
        BaseResponse<Object> baseResponse = new BaseResponse<>();
        baseResponse.setCode(BaseResponse.STATUS_ERROR);
        baseResponse.setMessage(exception.getMessage());
        return baseResponse;
    }
}
