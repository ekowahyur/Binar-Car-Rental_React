import React, { useState } from 'react';
import './style.css';
import Logo from '../../assets/images/logo.svg';
import Menu from './assets/menu.png';
import CloseButton from './assets/close.svg';

const Header = () => {
  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };

  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <header className="header-nav">
      <div className="container">
        <div className="row">
          <a href="#hero-section" className="logo">
            <img src={Logo} alt="" />
          </a>
          <div className={`overlay-bg ${active ? 'navbar-active' : ''}`} />
          <div className={`sidebar ${active ? 'navbar-active' : ''}`}>
            <div className="top-sidebar">
              <a href="#hero-section" className="logo-sidebar">
                <img src={Logo} alt="" />
              </a>
              <div className="close-button" onClick={closeSidebar}>
                <img className="" src={CloseButton} alt="" />
              </div>
            </div>
            <ul className="navbar">
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="burger-icon" onClick={openSidebar}>
            <img src={Menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;