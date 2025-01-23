import { Layout, theme } from 'antd';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CHeader from './CHeader';
import MenuLayout from './MenuLayout';

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: colorBgContainer }}>
      <MenuLayout />
      <Layout>
        <CHeader />
        <Content
          style={{
            margin: '16px',
            borderRadius: borderRadiusLG,
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
