
import React from 'react';
import { useState } from 'react';

function NavBar() {
  const[isActive,setIstActive]=useState(false);
  const handleToggle=()=>{
    setIstActive(!isActive);
  };
  return (
    <>
    <button onClick={handleToggle}>Navbar</button>
  <div className={`navbar ${isActive ? 'active' : ''}`}>
     
    </div>
    </>
  );
};

export default NavBar;