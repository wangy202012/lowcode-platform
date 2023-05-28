package com.robin.lowcodemanager.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class MyWebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                // 将路由和权限进行映射
                .antMatchers("/app/**").hasAuthority("app")
                .antMatchers("/content/**").hasAuthority("content")
                .antMatchers("/record/**").hasAuthority("record")
                .anyRequest().authenticated();

    }
}
