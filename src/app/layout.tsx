import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <div className="flex">
        <aside className="bg-gray-800 text-white w-64">Sidebar navigation</aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </ClerkProvider>
  );
};

export default Layout;