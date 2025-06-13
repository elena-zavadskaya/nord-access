import React, { useEffect, useRef, useState } from "react";
import "./styles/Hero.css";
import googlePlayBadge from "../assets/google-play-badge.png";

const Hero = () => {
  const heroRef = useRef(null);
  const [textWidth, setTextWidth] = useState("auto");

  useEffect(() => {
    // Анимация появления элементов
    const elements = document.querySelectorAll(
      ".hero__title, .hero__subtitle, .hero__description, .hero__app-download"
    );
    elements.forEach((el, index) => {
      el.style.animation = `fadeInUp 0.5s ease-out ${index * 0.2 + 0.3}s forwards`;
      el.style.opacity = "0";
    });

    // Рассчитываем ширину текстового блока
    const calculateTextWidth = () => {
      if (heroRef.current) {
        const navbar = document.querySelector(".navbar__container");
        const navbarButton = document.querySelector(".navbar__button");

        if (navbar && navbarButton) {
          const navbarRect = navbar.getBoundingClientRect();
          const buttonRect = navbarButton.getBoundingClientRect();

          // Ширина от левого края навбара до правого края кнопки
          const calculatedWidth = buttonRect.right - navbarRect.left - 80; // 80px - отступы
          setTextWidth(`${Math.max(calculatedWidth, 600)}px`); // Минимальная ширина 600px
        }
      }
    };

    calculateTextWidth();
    window.addEventListener("resize", calculateTextWidth);

    return () => {
      window.removeEventListener("resize", calculateTextWidth);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />

      <div className="hero__content" ref={heroRef}>
        <div className="hero__text" style={{maxWidth: textWidth}}>
          <h1 className="hero__title">Отраслевое решение АКСЕСС</h1>
          <p className="hero__subtitle">
            Универсальный инструмент для управления закупками и продажами вашего
            бизнеса
          </p>
          <p className="hero__description">
            Электронные закупки, аукционы, планирование отгрузок, финансовые
            операции и аналитика – всё в одном приложении для максимального
            удобства и эффективности.
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
            <path d="M12 19l-7-7 1.41-1.41L12 16.17l5.59-5.58L19 12z"/>
          </svg>
        </a>
      </div>

      {/* Подпись «Все решения в одном месте» в левом нижнем углу Hero */}
      <div className="hero__bottom-left">Все решения в одном месте</div>
    </section>
  );
};

export default Hero;
