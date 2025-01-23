import CardStatistic from '@/components/Dashboard/CardStatistic';
import FooterStatistics from '@/components/Dashboard/FooterStatistics';
import PercentText from '@/components/Dashboard/PercentText';
import Container from '@/hoc/Container';
import { formatMoney, formatNumber } from '@/utils/function';
import { Column, Tiny } from '@ant-design/charts';

import { Card, Col, Flex, Progress, ProgressProps, Row, Table } from 'antd';

const Dashboard = () => {
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

  const configArea = {
    data: [
      { date: '2023-09-21', value: 800 },
      { date: '2023-09-22', value: 850 },
      { date: '2023-09-23', value: 1000 },
      { date: '2023-09-24', value: 700 },
      { date: '2023-09-25', value: 1100 },
    ],
    xField: 'date',
    yField: 'value',
    shapeField: 'smooth',
    tooltip: { channel: 'y', valueFormatter: '.1f' },
    style: {
      fill: 'linear-gradient(-90deg, white 0%, #ac63ac 100%)',
      fillOpacity: 0.6,
    },
  };

  const configColumn = {
    data: [
      { date: '2023-09-21', value: 800 },
      { date: '2023-09-22', value: 850 },
      { date: '2023-09-23', value: 1000 },
      { date: '2023-09-24', value: 700 },
      { date: '2023-09-25', value: 1100 },
    ],
    xField: 'date',
    yField: 'value',
    tooltip: { channel: 'y', valueFormatter: '.1f' },
  };

  const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };

  const config = {
    data: {
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
    },
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
    group: true,
    style: {
      inset: 5,
    },
    height: 400,
  };

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={16}>
        <Col span={6}>
          <CardStatistic
            title="Total Sales"
            value={formatMoney(200000)}
            footer={
              <FooterStatistics text="Hàng ngày" value={formatMoney(12000)} />
            }
          >
            <Flex gap={10} align="end" wrap="wrap" style={{ flex: 1 }}>
              <PercentText name="Weekly" value={12} />
              <PercentText name="Yearly" value={9} isUp />
            </Flex>
          </CardStatistic>
        </Col>
        <Col span={6}>
          <CardStatistic
            title="Total Views"
            value={formatNumber(6038)}
            footer={<FooterStatistics text="Hàng ngày" value={502} />}
          >
            <Tiny.Area {...configArea} />
          </CardStatistic>
        </Col>
        <Col span={6}>
          <CardStatistic
            title="Total Views"
            value={formatNumber(6038)}
            footer={<FooterStatistics text="Hàng ngày" value={502} />}
          >
            <Tiny.Column {...configColumn} />
          </CardStatistic>
        </Col>
        <Col span={6}>
          <CardStatistic
            title="Total Process"
            value={'80%'}
            footer={
              <Flex gap={10} align="end" wrap="wrap" style={{ flex: 1 }}>
                <PercentText name="Weekly" value={12} />
                <PercentText name="Yearly" value={9} isUp />
              </Flex>
            }
          >
            <Progress
              percent={80}
              strokeColor={twoColors}
              size={['100%', 13]}
              status="active"
            />
          </CardStatistic>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={16}>
          <Card title="Tổng quan">
            <Column {...config} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Store Sales Ranking" style={{ height: '100%' }}>
            <Table
              dataSource={storeData}
              columns={columns}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export const Component = function AdminDashboard(): JSX.Element {
  return (
    <Container title="Admin Dashboard">
      <Dashboard />
    </Container>
  );
};
