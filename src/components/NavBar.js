import '../static/SideNavBar.css';
import React from 'react';
import { useState } from 'react';

function NavBar() {
  const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <button onClick={handleToggle} className="toggle-button">
                {isActive ? "Close" : "Open"} Sidebar
            </button>
            <div className={`side-navbar ${isActive ? "active" : ""}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
  );
};

export default NavBar;