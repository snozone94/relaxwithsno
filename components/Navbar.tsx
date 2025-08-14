import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RelaxWithSno</div>
      <div className="nav-links">
        {/* Additional nav links or user menu can go here */}
        <span className="user-placeholder">Your Profile</span>
      </div>
    </nav>
  );
}
