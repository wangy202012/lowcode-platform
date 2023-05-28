package com.robin.lowcodemanager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;


import static com.robin.lowcodemanager.utils.Constant.INDEX_LOGGER2;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = INDEX_LOGGER2)
public class AppLogger2 {
    @Id
    @Field(type = FieldType.Text)
    private String id;
    @Field(type = FieldType.Text,name="ip")
    private String ip;
    @Field(type = FieldType.Text,name = "classMethod")
    private String classMethod;
    @Field(type = FieldType.Text,name = "takeTime")
    private String takeTime;

    @Field(type = FieldType.Text,name = "url")
    private String url;

    @Field(type = FieldType.Text,name = "httpMethod")
    private String httpMethod;

    @Field(type = FieldType.Text,name = "methodName")
    private String methodName;

    @Field(type = FieldType.Text,name = "userName")
    private String userName;

    @Field(type = FieldType.Text,name = "currentDateTime")
    private String currentDateTime;
}
