package com.robin.lowcodemanager.utils;

import org.slf4j.MDC;
import org.springframework.context.EnvironmentAware;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class InputMDC implements EnvironmentAware {

    private static Environment environment;

    @Override
    public void setEnvironment(Environment environment) {
        InputMDC.environment = environment;
    }

    public static void putMDC(String takeTime,String methodName,String httpMethod,String userName,String url,String classMethod) {
        MDC.put("hostName", NetUtil.getLocalHostName());
        MDC.put("ip", NetUtil.getLocalIp());
        MDC.put("applicationName", environment.getProperty("spring.application.name"));
        MDC.put("takeTime",takeTime);
        MDC.put("methodName",methodName);
        MDC.put("httpMethod",httpMethod);
        MDC.put("userName",userName);
        MDC.put("url",url);
        MDC.put("classMethod",classMethod);

    }

}
