import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
