import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
      </div>
    </>
  );
}