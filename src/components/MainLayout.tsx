import { SIDE_BAR_COLLAPSED_WIDTH, SIDE_BAR_WIDTH } from '@/utils/constant';
import {
  DesktopOutlined,
  FileOutlined,
  LeftOutlined,
  PieChartOutlined,
  RightOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import React, { Suspense, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import CHeader from './CHeader';
import SpaceDiv from './SpaceDiv';

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
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const widthSidebar = useMemo(
    () => (collapsed ? SIDE_BAR_COLLAPSED_WIDTH : SIDE_BAR_WIDTH),
    [collapsed],
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
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
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          style={{
            borderRight: 'none',
          }}
        />
      </Sider>
      <Layout>
        <CHeader />
        <Content
          style={{
            margin: '16px',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            padding: 16,
            overflowY: 'auto',
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
