import React from 'react';
import { Link } from 'react-router-dom';
import malLogo from '../assets/MyAnimeList_Logo.png';

import Button from './Button';

import { flexIc, flexJbIc } from '../styles';

function Header() {
  return (
    <header className={`text-white p-2 absolute w-full top-0 mx-auto z-10`}>
      <div className={`${flexJbIc} max-w-7xl mx-auto`}>
        {/* LOGO */}
        <Link to="/" className={`${flexIc}`}>
          <img src={malLogo} alt="MyAnimeList_Logo" className="w-11" />
          <div className="ml-1">
            <h1 className="text-xl font-bold">MyAnimeList</h1>
            <p className="text-secondary3">Organize, Discuss, Discover</p>
          </div>
        </Link>

        {/* USER ACTION */}
        <div>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="white">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
