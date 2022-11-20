import * as React from 'react';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from '@/components/Elements';
import { lazyImport } from '@/utils/lazyImport';
import { MainLayout } from '@/components/Layout';

const { Users } = lazyImport(() => import('@/features/account'), 'Users');
const { Today } = lazyImport(() => import('@/features/todo'), 'Today');

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/users', element: <Users /> },
      { path: '/today', element: <Today /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
