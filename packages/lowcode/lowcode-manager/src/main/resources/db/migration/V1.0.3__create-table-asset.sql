CREATE TABLE upload_asset
(
    asset_id  VARCHAR(64) NOT NULL COMMENT '资源id',
    asset_name VARCHAR(64) NULL DEFAULT NULL COMMENT '资源名称',
    asset_path VARCHAR(64) NULL DEFAULT NULL COMMENT '资源路径',
    creator VARCHAR(16) NULL DEFAULT NULL COMMENT '创建者',
    create_time bigint NULL DEFAULT NULL COMMENT '创建时间',
    PRIMARY KEY (asset_id)
);
