package org.robin.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResult<T>{
    private int pageIndex;
    private int pageSize;
    private long total;
    private List<T> list;
}
