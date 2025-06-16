import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      if (isScrolled && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const menuItems = [
    { name: "Главная", href: "#hero" },
    { name: "Обзор", href: "#overview" },
    { name: "Модули", href: "#convenience" },
    { name: "Возможности", href: "#comfort" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contacts" }
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" aria-label="Главная" onClick={closeMobileMenu}>
          <img src={logo} alt="Логотип компании" />
        </a>

        <nav className={`navbar__nav ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="navbar__list">
            {menuItems.map(item => (
              <li key={item.name} className="navbar__item">
                <a href={item.href} onClick={closeMobileMenu} aria-label={item.name}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button className="navbar__button" aria-label="Личный кабинет">
            Личный кабинет
          </button>
        </div>

        <button
          className={`navbar__hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
