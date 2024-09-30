import { SIDE_BAR_COLLAPSED_WIDTH, SIDE_BAR_WIDTH } from '@/utils/constant';
import {
  LeftOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
  ProductOutlined,
  RightOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import React, { Suspense, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CHeader from './CHeader';
import SpaceDiv from './SpaceDiv';
import { DASHBOARD_ROUTE, PRODUCT_ROUTE } from '@/utils/routeUtils';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const ButtonCollapsed = styled(Button)`
  position: absolute;
  top: 85px;
  right: -15px;
  padding: 0 8px;
  z-index: 100;
  transition: background-color 0.3s;
`;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', DASHBOARD_ROUTE, <PieChartOutlined />),
  getItem('Sản phẩm', PRODUCT_ROUTE.BASE, <ProductOutlined />, [
    getItem('Danh sách', PRODUCT_ROUTE.LIST, <OrderedListOutlined />),
    getItem('Thêm mới', PRODUCT_ROUTE.CREATE, <PlusCircleOutlined />),
  ]),
];

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const widthSidebar = useMemo(
    () => (collapsed ? SIDE_BAR_COLLAPSED_WIDTH : SIDE_BAR_WIDTH),
    [collapsed],
  );

  const openKeys = useMemo(
    () => pathname.split('/').filter((x) => x)?.[0],
    [pathname],
  );

  console.log(openKeys);

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: colorBgContainer }}>
      <SpaceDiv width={widthSidebar} />
      <Sider
        theme="light"
        collapsed={collapsed}
        collapsedWidth={SIDE_BAR_COLLAPSED_WIDTH}
        onCollapse={(value) => setCollapsed(value)}
        width={SIDE_BAR_WIDTH}
        style={{
          position: 'fixed',
          height: '100vh',
          paddingRight: 10,
        }}
      >
        <ButtonCollapsed
          shape="circle"
          type="default"
          size="small"
          onClick={() => setCollapsed(!collapsed)}
          icon={
            collapsed ? (
              <RightOutlined style={{ color: '#cacaca' }} />
            ) : (
              <LeftOutlined style={{ color: '#cacaca' }} />
            )
          }
        />
        <div style={{ height: 70, width: '100%' }} />
        <Menu
          theme="light"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={[openKeys]}
          mode="inline"
          items={items}
          style={{
            borderRight: 'none',
          }}
          onSelect={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <CHeader />
        <Content
          style={{
            margin: '16px',
            borderRadius: borderRadiusLG,
            padding: 16,
            overflowY: 'auto',
            height: '100% ',
          }}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
