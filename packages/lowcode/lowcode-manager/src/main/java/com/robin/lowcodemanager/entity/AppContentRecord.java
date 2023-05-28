package com.robin.lowcodemanager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import static com.robin.lowcodemanager.utils.Constant.INDEX_RECORD;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = INDEX_RECORD)
public class AppContentRecord {
    @Id
    private String recordId;
    @Field(type = FieldType.Long)
    private Long appId;
    @Field(type = FieldType.Integer)
    private Integer type;
//    记录的描述，仅仅提交和发布选填
    @Field(type = FieldType.Text)
    private String desc;
//    记录的版本，仅仅发布必填
    @Field(type = FieldType.Text)
    private String version;
    @Field(type = FieldType.Text)
    private String updater;
    @Field(type = FieldType.Long)
    private Long updateTime;
    @Field(type = FieldType.Text)
    private String content;
}
