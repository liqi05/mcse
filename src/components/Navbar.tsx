import React from 'react';
import { Link } from 'react-router-dom';
import MCSLogoWhite from '../../assets/mcslogowhite.png';

function Navbar() {
  return (
    <nav className="flex text-white font-misans tracking-tighter text-xl font-light items-center">
      <a href="index.html">
        <img
          id="logopic"
          className="p-8 w-32 transition hover:scale-110 ease-out"
          src={MCSLogoWhite}
          alt="MCS Logo"
        />
      </a>
      <ul className="flex px-5">
        <li className="px-5 hover:text-zinc-200">
          <Link to="/">首页</Link>
        </li>
        <li className="px-5 hover:text-zinc-200">
          <Link to="/about">关于</Link>
        </li>
        <li className="px-5 hover:text-zinc-200">
          <Link to="/course">课程</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
