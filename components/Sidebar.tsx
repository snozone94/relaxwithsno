import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link href="/feed">Home</Link></li>
          <li><Link href="/creator">My Content</Link></li>
          <li><Link href="/subscriptions">Subscriptions</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
