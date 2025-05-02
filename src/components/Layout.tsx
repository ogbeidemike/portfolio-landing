import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-dark">
      <main className="mx-auto max-w-7xl">
        {children}
      </main>
    </div>
  );
};

export default Layout;