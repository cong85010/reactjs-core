import CTable from '@/components/CTable';
import FormSearch from '@/components/FormSearch';
import Container from '@/hoc/Container';
import { Button, Card, Flex, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const Component = function List() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Flex gap={10}>
          <Tooltip title="Edit">
            <Button icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip title="Delete">
            <Button icon={<DeleteOutlined />} />
          </Tooltip>
        </Flex>
      ),
    },
  ];
  return (
    <Container
      title="Danh sách sản phẩm"
      showTitle
      breadcrumb={[
        { path: '/', title: 'Dashboard' },
        { path: '/products/list', title: 'Sản phẩm' },
      ]}
    >
      <Flex vertical gap={20}>
        <Card>
          <FormSearch />
        </Card>
        <CTable
          columns={columns}
          dataSource={[
            {
              key: '1',
              name: 'John',
              age: 32,
              address: 'New York No. 1 Lake Park',
            },
            {
              key: '2',
              name: 'Jim',
              age: 42,
              address: 'London No. 1 Lake Park',
            },
            {
              key: '3',
              name: 'Tom',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
          ]}
        />
      </Flex>
    </Container>
  );
};
