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
import React, { Suspense, useEffect, useMemo, useState } from 'react';
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

type MenuItemProps = {
  key: string | number | bigint;
  label: React.ReactNode;
  icon: React.ReactNode;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItemProps {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items: MenuItemProps[] = [
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
  const [selectedMenu, setSelectedMenu] = useState(DASHBOARD_ROUTE);

  useEffect(() => {
    const key = items.find((item) =>
      pathname.startsWith(item.key.toString()),
    )?.key;

    if (key) {
      setSelectedMenu(key.toString());
    }
  }, [pathname]);

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
          defaultOpenKeys={[selectedMenu]}
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          mode="inline"
          items={items}
          style={{
            borderRight: 'none',
          }}
          openKeys={[selectedMenu]}
          onSelect={({ key }) => {
            navigate(key.toString());
          }}
          onOpenChange={(openKeys) => {
            setSelectedMenu(openKeys[1] as string);
          }}
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
