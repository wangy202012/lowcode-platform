package org.robin.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.provisioning.JdbcUserDetailsManager;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class MyWebSecurityConfig extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private ClientDetailsService clientDetailsService;
//    @Autowired
//    private TokenStore tokenStore;
    @Autowired
    DataSource dataSource;
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Bean
    public UserDetailsService userDetailsService() {
        JdbcUserDetailsManager manager = new JdbcUserDetailsManager(dataSource);
//        if (!manager.userExists("robin")) {
//            manager.createUser(User.withUsername("robin").password(passwordEncoder().encode("robin")).roles("Manager").build());
//        }
//        if (!manager.userExists("user1")) {
//            manager.createUser(User.withUsername("user1").password(passwordEncoder().encode("user1")).roles("Developer").build());
//        }
//        if (!manager.userExists("user2")) {
//            manager.createUser(User.withUsername("user2").password(passwordEncoder().encode("user2")).roles("Developer").build());
//        }
//        if (!manager.userExists("user3")) {
//            manager.createUser(User.withUsername("user3").password(passwordEncoder().encode("user3")).roles("Developer").build());
//        }
//        if (!manager.userExists("guest")) {
//            manager.createUser(User.withUsername("guest").password(passwordEncoder().encode("guest")).roles("Guest").build());
//        }

        return manager;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                // 使用方法注解，替代如下配置
//                .antMatchers("/mobile/**").hasAuthority("mobile")
//                .antMatchers("/salary/**").hasAuthority("salary")
//                // 后端放开路径
//                .antMatchers("/common/**").permitAll()
//                // 前端路径全部放开
//                .antMatchers("/","/assets/**").permitAll()
                .anyRequest().authenticated()
                .and()
                // 登录成功跳转页面
                .formLogin();
    }
}
