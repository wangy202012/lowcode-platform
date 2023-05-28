import * as React from 'react';
import { createElement } from 'react';
import { Tab } from '@alifd/next';
interface DetailItem {
  title: String;
  key: String;
  props: Object;
}

export interface ListDetailPageProps {
  /** 详情标签列表 */
  detailList: DetailItem[];
  /** 标签页关闭回调 */
  onClose:any,
  /** 列表页标题 */
  title: String,
  listChildren:React.ReactElement,
  detailChildren: React.ReactElement
}

const ListDetailPage: React.FC<ListDetailPageProps> = function ListDetailPage({
  children,
  listChildren,
  detailChildren,
  detailList = [],
  onClose,
  title = 'home'
}) {
  return (
    <Tab onClose={onClose}>
      <Tab.Item title={title} key="__0__">
        {listChildren}
      </Tab.Item>
      {detailList.map((item) => {
        return (
          <Tab.Item title={item.title} key={item.key} closeable={true} >
            {detailChildren}
          </Tab.Item>
        );
      })}
    </Tab>
  );
};

export default ListDetailPage;
