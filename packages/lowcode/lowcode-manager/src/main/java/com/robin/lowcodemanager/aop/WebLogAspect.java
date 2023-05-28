package com.robin.lowcodemanager.aop;

import com.robin.lowcodemanager.config.TokenConfig;
import com.robin.lowcodemanager.utils.InputMDC;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Aspect
@Component
@Order(100)
public class WebLogAspect {
    private ThreadLocal<Map<String, Object>> threadLocal = new ThreadLocal<Map<String, Object>>();

    /**
     * 横切点
     */
    @Pointcut("execution(public * com.robin.lowcodemanager.controller..*.*(..))")
    public void webLog() {
    }
    /**
     * 接收请求，并记录数据
     * @param joinPoint
     * @param controllerWebLog
     */
    @Before(value = "webLog()&& @annotation(controllerWebLog)")
    public void doBefore(JoinPoint joinPoint, ControllerWebLog controllerWebLog) {
        // 接收到请求
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes sra = (ServletRequestAttributes) ra;
        HttpServletRequest request = sra.getRequest();
        // 记录请求内容，threadInfo存储所有内容
        Map<String, Object> threadInfo = new HashMap<>();
        threadInfo.put("url", request.getRequestURL());
        threadInfo.put("uri", request.getRequestURI());
        threadInfo.put("httpMethod", request.getMethod());
        threadInfo.put("ip", request.getRemoteAddr());
        threadInfo.put("classMethod",
                joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName());
        threadInfo.put("args", Arrays.toString(joinPoint.getArgs()));
        threadInfo.put("userAgent", request.getHeader("User-Agent"));
        threadInfo.put("methodName", controllerWebLog.name());
        threadLocal.set(threadInfo);
    }
    /**
     * 执行成功后处理
     * @param controllerWebLog
     * @param ret
     * @throws Throwable
     */
    @AfterReturning(value = "webLog()&& @annotation(controllerWebLog)", returning = "ret")
    public void doAfterReturning(ControllerWebLog controllerWebLog, Object ret) throws Throwable {
//        Map<String, Object> threadInfo = threadLocal.get();
//        threadInfo.put("result", ret);
//        if (controllerWebLog.intoDb()) {
//            //插入数据库操作
//            //insertResult(threadInfo);
//        }
//        // 处理完请求，返回内容
//        System.out.println("RESPONSE : " + ret);
    }
    /**
     * 获取执行时间
     * @param proceedingJoinPoint
     * @return
     * @throws Throwable
     */
    @Around(value = "webLog()")
    public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        Object ob = proceedingJoinPoint.proceed();
        Map<String, Object> threadInfo = threadLocal.get();
        Long takeTime = System.currentTimeMillis() - startTime;
        if(threadInfo!=null) {
            InputMDC.putMDC(takeTime+"",threadInfo.get("methodName") + "",threadInfo.get("httpMethod") + "",TokenConfig.getUserName(),threadInfo.get("uri")+"",threadInfo.get("classMethod")+"");
            log.info("");
        }


        return ob;
    }
    /**
     * 异常处理
     * @param throwable
     */
    @AfterThrowing(value = "webLog()", throwing = "throwable")
    public void doAfterThrowing(Throwable throwable) {
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();

        ServletRequestAttributes sra = (ServletRequestAttributes) ra;

        HttpServletRequest request = sra.getRequest();
        // 异常信息
        System.out.println("{}接口调用异常，异常信息{}"+ request.getRequestURI()+  throwable);
    }

}
