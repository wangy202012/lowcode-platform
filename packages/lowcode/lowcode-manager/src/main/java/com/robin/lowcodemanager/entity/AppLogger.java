package com.robin.lowcodemanager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;


import static com.robin.lowcodemanager.utils.Constant.INDEX_LOGGER;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = INDEX_LOGGER)
public class AppLogger {
    @Id
    @Field(type = FieldType.Text)
    private String id;
    @Field(type = FieldType.Text,name="host.ip")
    private String ip;
    @Field(type = FieldType.Text,name = "@timestamp")
    private String time;
    @Field(type = FieldType.Text,name = "process.name")
    private String logType;
    @Field(type = FieldType.Text)
    private String message;


}
