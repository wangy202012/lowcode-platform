package org.robin.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
class ClientConfig {
    private String clientId;
    private String clientSecret;
    private String[] ids;
    private String scopes;
    private String[] redirectUris;
}


@Data
@Configuration
@ConfigurationProperties(prefix = "oauth-clients")
public class OauthClientsConfig {

    private List<ClientConfig> list;

}
