package com.robin.lowcodemanager.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class RedisUtils {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;


    public String get(final String key) {
        return redisTemplate.opsForValue().get(key);
    }

    public String getAndExpire(final String key, long sec) {
        return redisTemplate.opsForValue().getAndExpire(key, sec, TimeUnit.SECONDS);
    }

    public boolean set(final String key, String value) {
        boolean result = false;
        try {
            redisTemplate.opsForValue().set(key, value);
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }


    public String lockApp(String appId, String user, long time) {
        String key = "appId-" + appId;
        String value = user;
        String s = get(key);
        if (s != null) {
            if (s.equals(value)) {
                // 被自己占用，则续命
                return getAndExpire(key, time);
            }
            // 被其他占用，返回占用的用户名称
            return s;
        }
        ;
        boolean setRet = set(key, value);
        // 设置失败，返回null
        if (!setRet) return null;
        // 设置成功，获取当前锁占有者
        return getAndExpire(key, time);
    }


}
