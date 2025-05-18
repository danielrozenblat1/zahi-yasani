import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';

import { FaInstagram, FaFacebook, FaWhatsapp, FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSticky, setIsSticky] = useState(false);
  
  const phoneNumber = "+972549081705";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = "היי צהיי ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const menuItems = ['השירותים שלי', 'שאלות תשובות', 'מי אני'];

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      {windowWidth <= 850 && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      {/* {windowWidth <= 850 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )} */}
      {(isMenuOpen || isClosing) && windowWidth <= 850 && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              <ScrollLink 
                key={index} 
                to={item} 
                smooth={true} 
                offset={-150}
                duration={1000} 
                onClick={toggleMenu}
                className={styles.mobileMenuItem}
              >
                {item}
              </ScrollLink>
            ))}
            <div className={styles.mobileMenuItem}>
              <a href={`tel:${phoneNumber}`} className={styles.phoneLink}>
                <FaPhone /> מס׳ טלפון: {phoneNumber}
              </a>
            </div>
            {/* <div className={styles.center}>
              <img className={styles.image} src={logo} alt="מאי שושן לוגו"/>
            </div> */}
          </div>
        </div>
      )}
      {windowWidth > 850 && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <ScrollLink 
              key={index} 
              offset={-100}
              to={item} 
              smooth={true} 
              duration={500}
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      )}
      {/* {windowWidth > 1050 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )} */}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/zahayyasani/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a onClick={handleWhatsAppClick}><FaWhatsapp /></a>
        <a onClick={handlePhoneClick}><FaPhone /></a>
      </div>
    </nav>
  );
};

export default NavBarNew;