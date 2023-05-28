package com.robin.lowcodemanager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import static com.robin.lowcodemanager.utils.Constant.INDEX_MOCKS;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = INDEX_MOCKS)
public class Mocks {
    @Id
    @Field(type = FieldType.Text)
    private String id;
    @Field(type = FieldType.Text)
    private String name;
    @Field(type = FieldType.Text)
    private String engName;
    @Field(type = FieldType.Text)
    private String path;
    @Field(type = FieldType.Text)
    private String desc;
    @Field(type = FieldType.Text)
    private String creator;
    @Field(type = FieldType.Text)
    private String updater;
    @Field(type = FieldType.Text)
    private String managers;
    @Field(type = FieldType.Long)
    private Long createTime;
    @Field(type = FieldType.Long)
    private Long updateTime;
    @Field(type = FieldType.Text)
    private String content;
}
