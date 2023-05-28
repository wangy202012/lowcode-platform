package org.robin.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageParam {
    // 设置默认只为1/10
    private int pageSize=10;
    private int pageIndex=1;
}
