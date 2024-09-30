import { Button, DatePicker, Flex, Form, Input, Select, Space } from 'antd';
import React from 'react';
import CForm from '../CForm';
import { ClearOutlined, SearchOutlined } from '@ant-design/icons';

export default function FormSearch() {
  const [form] = Form.useForm();
  return (
    <Flex justify="space-between" align="center">
      <CForm
        form={form}
        layout="inline"
        initialValues={{
          keyword: '',
        }}
        onFinish={(values) => {
          console.log('Search:', values);
        }}
        style={{
          gap: 10,
        }}
        wrapperCol={{ span: 16 }}
        labelAlign="left"
      >
        <Form.Item name="keyword" label="Từ khóa">
          <Input placeholder="Nhập từ khóa" />
        </Form.Item>
        <Form.Item name="date" label="Ngày tạo">
          <DatePicker
            format="DD/MM/YYYY"
            placeholder="Chọn ngày"
            style={{ width: 200 }}
          />
        </Form.Item>
        <Form.Item name="status" label="Trạng thái">
          <Select
            style={{
              width: 200,
            }}
          >
            <Select.Option value="">Tất cả</Select.Option>
            <Select.Option value="active">Đang hoạt động </Select.Option>
            <Select.Option value="inactive">Dừng hoạt động</Select.Option>
          </Select>
        </Form.Item>
      </CForm>
      <Space>
        <Button icon={<ClearOutlined />} onClick={() => form.resetFields()}>
          Xóa bộ lọc
        </Button>
        <Button
          icon={<SearchOutlined />}
          type="primary"
          onClick={() => form.submit()}
        >
          Tìm kiếm
        </Button>
      </Space>
    </Flex>
  );
}
