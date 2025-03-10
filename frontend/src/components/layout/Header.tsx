import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 z-10">
      <h3 className="animate-charcter text-2x1">SimuLab</h3>
    </header>
  );
};

export default Header;