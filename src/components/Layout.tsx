// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <main className="mt-8">{children}</main>
    </div>
  );
};

export default Layout;
