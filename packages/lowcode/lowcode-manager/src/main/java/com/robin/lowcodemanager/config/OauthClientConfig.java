package com.robin.lowcodemanager.config;


import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
@Configuration
@ConfigurationProperties(prefix = "oauth-client")
public class OauthClientConfig  {
    private String clientId;
    // 数组可以传入可变参数中
    private String[] clientRoutes;
    private String clientSecret;
    private String serverContext;
    private String serverPort;
    private String serverIp;
}
