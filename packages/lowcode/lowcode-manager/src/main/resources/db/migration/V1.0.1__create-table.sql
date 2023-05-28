

CREATE TABLE application
(
    app_id int NOT NULL COMMENT '应用id' AUTO_INCREMENT,
    app_name VARCHAR(64) NULL DEFAULT NULL COMMENT '应用名称',
    app_path VARCHAR(64) NULL DEFAULT NULL COMMENT '应用路径',
    creator VARCHAR(16) NULL DEFAULT NULL COMMENT '创建者',
    managers VARCHAR(1024) NULL DEFAULT NULL COMMENT '管理员',
    create_time bigint NULL DEFAULT NULL COMMENT '创建时间',
    update_time bigint NULL DEFAULT NULL COMMENT '更新时间',
    has_delete  tinyint NULL DEFAULT 0 COMMENT '是否删除',
    PRIMARY KEY (app_id)
) auto_increment 100000;
