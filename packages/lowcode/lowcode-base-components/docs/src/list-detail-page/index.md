## 何时使用

适合表单场景。

## 示例

```tsx
import React, { useState } from 'react';
import { ListDetailPage } from 'lowcode-base-components';
import { Button } from '@alifd/next';

// 测试地址： https://codesandbox.io/s/sweet-margulis-u61wpk?file=/App.tsx
export default () => {
  const [detailList, setDetailList] = useState([]);
  const addDetail = () => {
    setDetailList([
      ...detailList,
      {
        title: 'title-' + Math.random().toString(16).slice(4),
        key: Math.random().toString(16).slice(4),
        props: {},
      },
    ]);
  };
  const onClose = (key)=>{
    setDetailList(detailList.filter(item=>item.key!==key))
    debugger
  }
  return (
    <div>
      <ListDetailPage detailList={detailList} onClose={onClose} title="列表页面">
        <Button onClick={addDetail}>添加详情页面</Button>
      </ListDetailPage>
    </div>
  );
};
```

## API

<API hideTitle  src="@/components/list-detail-page/list-detail-page.tsx" />
