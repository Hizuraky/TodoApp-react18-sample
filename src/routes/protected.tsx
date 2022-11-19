import * as React from 'react';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from '@/components/Elements';
import { lazyImport } from '@/utils/lazyImport';

const { Users } = lazyImport(() => import('@/features/account'), 'Users');

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '/users', element: <Users /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
