import React, { useState } from 'react';
import { mylogo1 } from './../assets';
import './NavBar.css';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const handleMenuItemClick = () => setToggle(false);

  return (
    <div className="w-full z-1 p-[10px] flex justify-between items-center">
      <a href="#home" onClick={handleMenuItemClick}>
        <img src={mylogo1} className="lg:ml-3 md:ml-3 sm:ml-3 lg:h-[70px] md:h-[70px] sm:h-[70px] xls:h-[50px] mb-0" alt='LOGO'/>
      </a>
      
      <div className='text-xl'>
        <ul className="hidden text-black md:flex">
          <li className="menuItem hover:scale-110">
            <a href="#home" onClick={handleMenuItemClick}>About Me</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="#skills" onClick={handleMenuItemClick}>Skills and Achievements</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="#portfolio" onClick={handleMenuItemClick}>Portfolio</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="#contact" onClick={handleMenuItemClick}>Contact Me</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href={'#'} target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>

        <div className="flex flex-col items-end">
          {!toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={handleToggle} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6 cursor-pointer md:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          ) : (
            <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer md:hidden h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}

          {toggle && (
            <ul className="md:hidden text-center absolute text-base flex mt-8 z-20 text-black flex-col bg-gray-200 p-1 rounded-3xl delay-300 transition-all">
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <a href="#home">About Me</a>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <a href="#skills">Skills and Achievements</a>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <a href="#contact">Contact Me</a>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <a href={'#'} target={'_blank'} rel="noreferrer">Resume</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
