import React, { useEffect, useRef, useState } from "react";
import "./styles/Overview.css";
import bearImage from "../assets/bear.png";

const Overview = () => {
  const bearRef = useRef(null);
  const [isBearVisible, setIsBearVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBearVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (bearRef.current) {
      observer.observe(bearRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="overview" className="overview">
      <h2 className="overview__main-title">Возможности программного продукта</h2>

      <div className="overview__container">
        {/* Левая колонка: мишка */}
        <div
          className={
            isBearVisible
              ? "overview__bear-wrapper overview__bear-visible"
              : "overview__bear-wrapper"
          }
          ref={bearRef}
          style={{
            transform: isScrolling
              ? `translateY(${Math.min(scrollY * 0.05, 20)}px) rotate(${Math.sin(
                  scrollY * 0.01
                ) * 5}deg)`
              : "translateY(0px) rotate(0deg)",
          }}
        >
          <img src={bearImage} alt="Мишка" className="overview__bear-image" />
          <div className="overview__bear-shadow"></div>
        </div>

        {/* Правая колонка: два блока с одинаковой стилизацией */}
        <div className="overview__modules-wrapper">
          {/* Блок 1: Модули ОНЛАЙН */}
          <div className="overview__modules-card">
            <h3 className="overview__modules-title">
              Модули <span className="overview__highlight">ОНЛАЙН</span>
            </h3>

            <ul className="overview__modules-list">
              <li>
                <span className="overview__bullet">▶</span>
                управление закупками
              </li>
              <li>
                <span className="overview__bullet">▶</span>
                управление уведомлениями
              </li>
              <li>
                <span className="overview__bullet">▶</span>
                управление финансами
              </li>
              <li>
                <span className="overview__bullet">▶</span>
                управление логистикой
              </li>
              <li>
                <span className="overview__bullet">▶</span>
                справочники
              </li>
            </ul>

            <div className="overview__pro-section">
              <h4 className="overview__pro-title">Pro версия</h4>
              <ul className="overview__pro-list">
                <li>
                  <span className="overview__bullet">▶</span>
                  Аукцион
                </li>
              </ul>
            </div>
          </div>

          {/* Блок 2: Описание команды (новая карточка) */}
          <div className="overview__modules-card overview__team-card">
            <div className="overview__team-content">
              <p className="overview__modules-desc">
                Наша команда специалистов разработала комплексный набор модулей,
                с учётом специфики отраслевой торговли нефтепродуктами
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;