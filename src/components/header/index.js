import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import './style.css';
import Logo from '../../assets/images/logo.svg';
import Menu from './assets/menu.png';
import CloseButton from './assets/close.svg';

const Header = () => {
  const location = useLocation()
  console.log(location.pathname);
  const show = location.pathname === '/' ? true : false
  console.log(show);

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
          <a href="/" className="logo">
            <img src={Logo} alt="" />
          </a>
          {show ? (
          <>
          <div className={`overlay-bg ${active ? 'navbar-active' : ''}`} />
          <div className={`sidebar ${active ? 'navbar-active' : ''}`}>
            <div className="top-sidebar">
              <a href="/" className="logo-sidebar">
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
          </>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;