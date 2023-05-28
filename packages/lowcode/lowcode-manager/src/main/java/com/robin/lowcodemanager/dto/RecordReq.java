package com.robin.lowcodemanager.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class RecordReq implements Serializable {
    private Long appId;
    private int pageIndex;
    private int pageSize;
    private List<Integer> typeList;
}
