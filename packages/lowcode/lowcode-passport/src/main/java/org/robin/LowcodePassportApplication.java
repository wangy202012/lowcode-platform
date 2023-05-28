package org.robin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Hello world!
 *
 */

@SpringBootApplication
@EnableAuthorizationServer
@DependsOn(value = { "flywayInitializer"})
public class LowcodePassportApplication
{

    public static void main( String[] args )
    {
        SpringApplication.run(LowcodePassportApplication.class,args);
    }
}
