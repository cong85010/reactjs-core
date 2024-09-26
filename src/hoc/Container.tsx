import { Breadcrumb, BreadcrumbProps } from 'antd';
import React from 'react';
import PageSeo from '../components/PageSeo';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

export default function Container({
  title,
  description,
  breadcrumb,
  children,
}: {
  title: string;
  description?: string;
  breadcrumb?: ItemType[];
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageSeo title={title} description={description} />
      {breadcrumb && (
        <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumb} />
      )}
      {children}
    </div>
  );
}
