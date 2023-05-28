package org.robin.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BaseResponse<T> {
    public static final int STATUS_SUCCESS = 0;
    public static final int STATUS_ERROR = -1;
    public static final int STATUS_ERROR_401 = 401;

    private Integer code;
    private String message;
    private T data;

    public static <T> BaseResponse<T> success(String message, T data) {
        return new BaseResponse<T>(STATUS_SUCCESS, message, data);
    }

    public static BaseResponse success(String message) {
        return success(message, null);
    }

    public static <T> BaseResponse<T> success(T data) {
        return success("SUCCESS", data);
    }

    public static BaseResponse error(String message) {
        return new BaseResponse(STATUS_ERROR, message, null);
    }


}
