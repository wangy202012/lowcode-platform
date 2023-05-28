package com.robin.lowcodemanager.config;

import com.robin.lowcodemanager.exception.MyAccessDeniedHandler;
import com.robin.lowcodemanager.exception.MyAuthenticationEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;

import java.util.List;

@Configuration
public class MyResourceServerConfig extends ResourceServerConfigurerAdapter {
    // 一个资源可以对应多个权限，一个权限可以对应多个路径
    public static final String RESOURCE_ID = "app"; // 必须为权限之一，不清楚原因！！！
    @Autowired
    private TokenStore tokenStore;

    @Autowired
    private OauthClientConfig oauthClientConfig;
    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.resourceId(RESOURCE_ID) //资源id
                .tokenStore(tokenStore)
                .authenticationEntryPoint(new MyAuthenticationEntryPoint())
                .accessDeniedHandler(new MyAccessDeniedHandler())
                .stateless(true);// 无状态的，不用关心session
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests() // 校验请求
                .antMatchers(oauthClientConfig.getClientRoutes())
                .access("#oauth2.hasScope('all')")
                .and().csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
