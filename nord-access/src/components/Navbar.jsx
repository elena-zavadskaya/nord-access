import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobileMenuOpen]);

  // Закрытие меню при клике на пункт
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Логотип */}
        <a href="#hero" className="navbar__logo" aria-label="Главная" onClick={closeMobileMenu}>
          <img src={logo} alt="Логотип компании" />
        </a>

        {/* Основное меню */}
        <nav className={`navbar__nav ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="navbar__list">
            {[
              { name: "Главная", href: "#hero" },
              { name: "Обзор", href: "#overview" },
              { name: "Модули", href: "#modules" },
              { name: "Возможности", href: "#features" },
              { name: "О нас", href: "#about" },
              { name: "Контакты", href: "#contacts" }
            ].map((item) => (
              <li key={item.name} className="navbar__item">
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопка входа */}
        <div className="navbar__actions">
          <button className="navbar__button" aria-label="Личный кабинет">
            Личный кабинет
          </button>
        </div>

        {/* Гамбургер меню */}
        <button
          className={`navbar__hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;