import Container from '@/hoc/Container';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import { Card, Row, Col, Statistic, Progress, Table, DatePicker } from 'antd';
import {
  LineChartOutlined,
  RiseOutlined,
  FallOutlined,
} from '@ant-design/icons';

const Dashboard = () => {
  // Sample data for the bar chart
  const salesData = [
    { month: 'Jan', sales: 600 },
    { month: 'Feb', sales: 300 },
    { month: 'Mar', sales: 400 },
    { month: 'Apr', sales: 200 },
    { month: 'May', sales: 700 },
    { month: 'Jun', sales: 800 },
    { month: 'Jul', sales: 600 },
    { month: 'Aug', sales: 1000 },
    { month: 'Sep', sales: 700 },
    { month: 'Oct', sales: 900 },
    { month: 'Nov', sales: 400 },
    { month: 'Dec', sales: 1200 },
  ];

  // Chart configuration
  const barConfig = {
    data: salesData,
    xField: 'month',
    yField: 'sales',
    height: 200,
  };

  // Data for the table
  const storeData = [
    { key: '1', store: 'Store 0', sales: 323234 },
    { key: '2', store: 'Store 1', sales: 323234 },
    { key: '3', store: 'Store 2', sales: 323234 },
    { key: '4', store: 'Store 3', sales: 323234 },
    { key: '5', store: 'Store 4', sales: 323234 },
    { key: '6', store: 'Store 5', sales: 323234 },
  ];

  const columns = [
    {
      title: 'Store Name',
      dataIndex: 'store',
      key: 'store',
    },
    {
      title: 'Sales Amount',
      dataIndex: 'sales',
      key: 'sales',
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Sales"
              value={126560}
              prefix="¥"
              suffix={<LineChartOutlined />}
            />
            <Statistic title="Day Sales" value={12423} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Visitors" value={8846} />
            <Statistic title="Daily Visitors" value={1234} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Transactions" value={6560} />
            <Progress percent={60} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Operation Effectiveness" value={78} suffix="%" />
            <Progress percent={78} status="active" />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={16}>
          <Card>{/* <Bar {...barConfig} /> */}</Card>
        </Col>
        <Col span={8}>
          <Card title="Store Sales Ranking">
            <Table
              dataSource={storeData}
              columns={columns}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card>
            <DatePicker.RangePicker />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export const Component = function AdminDashboard(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container title="Admin Dashboard">
      <Dashboard />
    </Container>
  );
};
