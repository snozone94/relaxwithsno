import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

/**
 * Layout component providing a consistent navbar and sidebar across the
 * authenticated areas of the site.  It uses flexbox to arrange the
 * sidebar and main content horizontally.  Children passed to this
 * component will be rendered inside the main content area.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </>
  );
}