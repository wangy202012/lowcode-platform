package com.robin.lowcodemanager.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "upload_asset", autoResultMap = true)
public class UploadAsset {
    @TableId(value="asset_id")
    private String assetId;
    private String assetName;
    private String assetPath;
    private String creator;
    private Long createTime;
}
