package com.robin.lowcodemanager.config;

import lombok.Data;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
@Getter
@Configuration
@ConfigurationProperties(prefix = "enums")
public class EnumsConfig {
    private List<String> limits;
}
