// CForm.js
import React from 'react';
import { Form, Button, FormProps } from 'antd';

type CFormProps = FormProps & {
  children: React.ReactNode;
  onFinish?: (event: Event) => void;
  submitText?: string;
  showSubmit?: boolean;
};

const CForm = ({
  children,
  onFinish,
  submitText = 'Xác nhận',
  showSubmit = false,
  ...rest
}: CFormProps) => {
  return (
    <Form onFinish={onFinish} {...rest}>
      {children}
      {showSubmit && (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default CForm;
