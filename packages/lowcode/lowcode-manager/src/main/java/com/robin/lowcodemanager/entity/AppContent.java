package com.robin.lowcodemanager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import static com.robin.lowcodemanager.utils.Constant.INDEX_CONTENT;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = INDEX_CONTENT)
public class AppContent {
    @Id
    @Field(type = FieldType.Long)
    private Long appId;
    @Field(type = FieldType.Text)
    private String updater;
    @Field(type = FieldType.Text)
    private String content;

}
