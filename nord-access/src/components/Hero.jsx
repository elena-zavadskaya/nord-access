import React, { useEffect, useRef, useState } from "react";
import "./styles/Hero.css";
import googlePlayBadge from "../assets/google-play-badge.png";

const Hero = () => {
  const heroRef = useRef(null);
  const [textWidth, setTextWidth] = useState("auto");

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".hero__title, .hero__subtitle, .hero__description, .hero__app-download"
    );
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.animation = `fadeInUp 0.5s ease-out ${index * 0.2 + 0.3}s forwards`;
    });

    const calculateTextWidth = () => {
      if (!heroRef.current) return;
      const navbar = document.querySelector(".navbar__container");
      const button = document.querySelector(".navbar__button");
      if (navbar && button) {
        const navRect = navbar.getBoundingClientRect();
        const btnRect = button.getBoundingClientRect();
        const width = btnRect.right - navRect.left - 80;
        setTextWidth(`${Math.max(width, 600)}px`);
      }
    };

    calculateTextWidth();
    window.addEventListener("resize", calculateTextWidth);
    return () => window.removeEventListener("resize", calculateTextWidth);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content" ref={heroRef}>
        <div className="hero__text" style={{ maxWidth: textWidth }}>
          <h1 className="hero__title">Отраслевое решение АКСЕСС</h1>
          <p className="hero__subtitle">
            Универсальный инструмент для управления закупками и продажами вашего бизнеса
          </p>
          <p className="hero__description">
            Электронные закупки, аукционы, планирование отгрузок, финансовые операции и аналитика – всё в одном приложении для максимального удобства и эффективности.
          </p>
          <div className="hero__app-download">
            <div className="hero__download-text">
              <h2 className="hero__download-title">Всегда под рукой</h2>
              <p className="hero__download-subtitle">Скачать приложение</p>
            </div>
            <div className="hero__badge-wrapper">
              <a href="https://play.google.com/store/games?hl=ru" className="hero__badge-link">
                <img
                  src={googlePlayBadge}
                  alt="Скачать из Google Play"
                  className="hero__badge-image"
                />
              </a>
            </div>
          </div>
        </div>
        <a href="#overview" className="hero__scroll-button" aria-label="Вниз">
          <svg className="hero__scroll-icon" viewBox="0 0 24 24">
            <path d="M12 19l-7-7 1.41-1.41L12 16.17l5.59-5.58L19 12z" />
          </svg>
        </a>
      </div>
      <div className="hero__bottom-left">Все решения в одном месте</div>
    </section>
  );
};

export default Hero;

