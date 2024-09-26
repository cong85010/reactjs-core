import React from 'react';
import { Helmet } from 'react-helmet';

type SeoWrapperProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function SeoWrapper({
  title,
  description,
  children,
}: SeoWrapperProps) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Trang chủ'}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content={description || 'Chào mừng đến với website chúng tôi'}
        />
      </Helmet>
      {children}
    </>
  );
}
