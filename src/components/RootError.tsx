import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function RootError() {
  const err = useRouteError() as RouteError;

  const TitleError = {
    success: 'Thành công',
    warning: 'Cảnh báo',
    error: 'Lỗi',
    info: 'Thông tin',
    '403': 'Xin lỗi, bạn không được phép truy cập trang này.',
    '404': 'Xin lỗi, trang bạn yêu cầu không tìm thấy.',
    '500': 'Xin lỗi, server đang gặp sự cố.',
  };

  return (
    <Result
      status={err.status ?? 'error'}
      title={err.status ?? 'error'}
      subTitle={TitleError[err.status ?? '403']}
      extra={<Button type="primary">Về trang chủ</Button>}
    />
  );
}

type RouteError = Error & { status?: ResultStatusType; statusText?: string };
