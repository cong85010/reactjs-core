import { Breadcrumb, Typography } from 'antd';
import React from 'react';
import PageSeo from '../components/PageSeo';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

function itemRender(currentRoute: ItemType, items: ItemType[]) {
  const isLast = currentRoute?.path === items[items.length - 1]?.path;

  return isLast ? (
    <span>{currentRoute.title}</span>
  ) : (
    <Link to={currentRoute.path ?? '#'}>{currentRoute.title}</Link>
  );
}

export default function Container({
  title,
  description,
  breadcrumb,
  children,
  showTitle = false,
}: {
  title: string;
  description?: string;
  breadcrumb?: ItemType[];
  showTitle?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageSeo title={title} description={description} />
      {breadcrumb && (
        <Breadcrumb
          itemRender={itemRender}
          style={{ margin: '16px 0' }}
          items={breadcrumb}
        />
      )}
      {showTitle && (
        <Typography.Title style={{ fontSize: 24 }}>{title}</Typography.Title>
      )}
      {children}
    </div>
  );
}
