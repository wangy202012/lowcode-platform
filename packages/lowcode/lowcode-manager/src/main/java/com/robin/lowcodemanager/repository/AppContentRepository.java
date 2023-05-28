package com.robin.lowcodemanager.repository;

import com.robin.lowcodemanager.entity.AppContent;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface AppContentRepository extends ElasticsearchRepository<AppContent, Long> {
}
