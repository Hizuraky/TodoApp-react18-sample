import * as React from 'react';
import { AppRoutes } from '@/routes';
import { AppProvider } from '@/providers/app';
import './index.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
