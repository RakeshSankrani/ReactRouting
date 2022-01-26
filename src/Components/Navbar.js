import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <div>


    <ul className="nav justify-content-center bg-dark p-3">
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/mount">Mount</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/update">Update</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/unmount">Unmount</Link>
  </li>
  
</ul>
      
    </div>
  

;
};

export default Navbar;


