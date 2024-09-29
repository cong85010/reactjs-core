import CForm from '@/components/CForm';
import Container from '@/hoc/Container';
import { Card, Form, Input } from 'antd';

export const Component = function Create() {
  return (
    <Container
      showTitle
      title="Tạo mới sản phẩm"
      breadcrumb={[
        { path: '/', title: 'Home' },
        { path: '/products', title: 'Sản phẩm' },
        { path: '/products/create', title: 'Tạo mới' },
      ]}
    >
      <Card>
        <CForm
          style={{
            maxWidth: 520,
            margin: '0 auto',
          }}
          showSubmit
          layout="vertical"
          onFinish={(e) => console.log(e)}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
        </CForm>
      </Card>
    </Container>
  );
};
