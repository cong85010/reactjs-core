import React from 'react';
import { Helmet } from 'react-helmet';

type PageSeoProps = {
  title?: string;
  description?: string;
};

export default function PageSeo({ title, description }: PageSeoProps) {
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
    </>
  );
}
