import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <div>
        <div>
          <Link to="/">Click here</Link> {/* Corrected the 'to' attribute */}
        </div>
        <h1>hello world</h1>
      </div>
    </nav>
  );
};

export default Navbar;
