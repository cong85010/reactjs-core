import CTable from '@/components/CTable';
import FormSearch from '@/components/FormSearch';
import Container from '@/hoc/Container';
import { Card, Flex } from 'antd';

export const Component = function List() {
  return (
    <Container
      title="Danh sách sản phẩm"
      showTitle
      breadcrumb={[
        { path: '/', title: 'Dashboard' },
        { path: '/products', title: 'Sản phẩm' },
      ]}
    >
      <Flex vertical gap={20}>
        <Card>
          <FormSearch />
        </Card>
        <CTable
          columns={[
            { title: 'Name', dataIndex: 'name' },
            { title: 'Age', dataIndex: 'age' },
            { title: 'Address', dataIndex: 'address' },
          ]}
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
