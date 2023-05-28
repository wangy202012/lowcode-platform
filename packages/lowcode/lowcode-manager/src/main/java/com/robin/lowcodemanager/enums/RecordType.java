package com.robin.lowcodemanager.enums;

import lombok.Getter;

@Getter
public enum RecordType {
    SAVE(0, "保存"),
    COMMIT(1, "提交"),
    PUBLISH(2, "发布"),
    ROLLBACK(3, "回滚");
    private final Integer value;
    private final String label;

    RecordType(Integer value, String label) {
        this.value = value;
        this.label = label;
    }
}
