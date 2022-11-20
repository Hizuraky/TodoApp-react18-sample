import * as React from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { SPSidebar, PCSidebar } from './Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      <SPSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <PCSidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-12 bg-white shadow">
          <Hamburger toggled={sidebarOpen} size={25} toggle={setSidebarOpen} />
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-4">{children}</main>
      </div>
    </div>
  );
};
