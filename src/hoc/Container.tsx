import { Breadcrumb, Card } from 'antd';
import React from 'react';

export default function Container() {
  return (
    <Card>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
}
