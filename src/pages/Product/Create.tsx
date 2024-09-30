import CForm from '@/components/CForm';
import Container from '@/hoc/Container';
import { PRODUCT_ROUTE } from '@/utils/routeUtils';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, InputNumber, Upload } from 'antd';

export const Component = function Create() {
  return (
    <Container
      showTitle
      title="Tạo mới sản phẩm"
      breadcrumb={[
        { path: '/', title: 'Home' },
        { path: PRODUCT_ROUTE.LIST, title: 'Sản phẩm' },
        { title: 'Tạo mới' },
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
          {/* Product Name */}
          <Form.Item
            label="Product Name"
            name="name"
            rules={[
              { required: true, message: 'Please enter the product name!' },
            ]}
          >
            <Input placeholder="Enter product name" />
          </Form.Item>

          {/* Product Price */}
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: 'Please enter the product price!' },
            ]}
          >
            <InputNumber
              min={0}
              placeholder="Enter price"
              style={{ width: '100%' }}
            />
          </Form.Item>

          {/* Product Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please enter the product description!',
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Enter product description" />
          </Form.Item>

          {/* Upload Product Image */}
          <Form.Item
            label="Product Image"
            name="image"
            valuePropName="fileList"
            rules={[
              { required: true, message: 'Please upload the product image!' },
            ]}
          >
            <Upload name="logo" listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </CForm>
      </Card>
    </Container>
  );
};
