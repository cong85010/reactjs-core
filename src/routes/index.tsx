/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import RootError from '../components/RootError';
import MainLayout from '../components/MainLayout';
import { DASHBOARD_ROUTE, PRODUCT_ROUTE } from '@/utils/routeUtils';

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  // {
  //   path: '',
  //   element: <BaseLayout />,
  //   errorElement: <RootError />,
  //   children: [{ path: 'login', lazy: () => import('../pages/Login') }],
  // },
  {
    path: '',
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to={DASHBOARD_ROUTE} replace /> },
      { path: DASHBOARD_ROUTE, lazy: () => import('../pages/Dashboard') },
      {
        path: PRODUCT_ROUTE.CREATE,
        lazy: () => import('../pages/Product/Create'),
      },
      { path: PRODUCT_ROUTE.LIST, lazy: () => import('../pages/Product/List') },
    ],
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
