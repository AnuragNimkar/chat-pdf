import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className='flex '>
        <div>
          <Link to="/">Logo</Link> {/* Corrected the 'to' attribute */}
        </div>
        
        <div>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
          
          <li >  <Link to ="/sign">Sign</Link></li>
        
        
        
         <li> <Link to = "/Login">Log in</Link></li>
          <li> <Link to = "/AIPDF">AI PDF</Link></li>
        
          </ul>

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
