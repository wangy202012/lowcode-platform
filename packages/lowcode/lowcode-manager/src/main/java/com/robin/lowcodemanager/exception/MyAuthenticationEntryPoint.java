package com.robin.lowcodemanager.exception;

import com.alibaba.fastjson.JSONObject;
import com.robin.lowcodemanager.config.OauthClientConfig;
import com.robin.lowcodemanager.dto.BaseResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.provider.error.AbstractOAuth2SecurityExceptionHandler;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

public class MyAuthenticationEntryPoint extends AbstractOAuth2SecurityExceptionHandler implements AuthenticationEntryPoint {
    @Autowired
    private OauthClientConfig oauthClientConfig;
    @Value("${server.port}")
    private String port;


    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        BaseResponse<Map<String, String>> baseResponse = new BaseResponse<>();
        baseResponse.setMessage(authException.getMessage());
        baseResponse.setCode(BaseResponse.STATUS_ERROR_401);
        Map<String, String> map = new HashMap<>();
        // 采用简化模式！！！
        map.put("targetUrl", "https://" + oauthClientConfig.getServerIp() + ":" + oauthClientConfig.getServerPort() + "/" + oauthClientConfig.getServerContext() + "/oauth/authorize?client_id=" + oauthClientConfig.getClientId() + "&response_type=token&scope=all");
        baseResponse.setData(map);
        PrintWriter writer = response.getWriter();
        writer.write(JSONObject.toJSONString(baseResponse));
    }
}
