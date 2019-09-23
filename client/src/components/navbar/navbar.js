import React from 'react';
import Logo from './../../assets/logo.svg';

export default () => (
  <nav className="navbar is-black" role="navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={Logo} width="112" height="52" alt="brand logo"/>OpenBooks
      </a>
    </div>
  </nav>
)
