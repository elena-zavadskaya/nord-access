import React from 'react';
import { useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import { FaTruck, FaGasPump, FaRegLightbulb, FaPhoneAlt, FaApple, FaGooglePlay, FaHome, FaClipboardList, FaChartPie, FaBell, FaCog, FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import overviewVideo from './assets/overview-video.mp4';
import moduleImage1 from './assets/module1.png';
import moduleImage2 from './assets/module2.png';
import moduleImage3 from './assets/module3.png';
import "typeface-montserrat";
import "typeface-roboto";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <a href="#top" className="logo-link">
            <img src={logo} alt="Nord Logo" className="logo" />
          </a>
          <ul className="nav-links">
            <li><a href="#overview">Обзор</a></li>
            <li><a href="#modules">Модули</a></li>
            <li><a href="#features">Возможности</a></li>
            <li><a href="#about">О компании</a></li>
            <li><a href="#download">Скачать приложение</a></li>
          </ul>
        </div>
        <div className="hero-section modern-hero dark-hero" data-aos="fade-up" id="top">
          <div className="hero-text">
            <h1 className="app-title">НОРД Топливо - Ваш надежный партнер по доставке топлива</h1>
            <p className="hero-description">Наша платформа предоставляет уникальную возможность управлять всеми аспектами доставки топлива в одном приложении. Экономьте время, получайте актуальную информацию и контролируйте все процессы с помощью НОРД Топливо.</p>
            <button className="cta-button" onClick={() => window.open("http://nordrussia.ru/", "_blank")}>Скачать приложение</button>
          </div>
        </div>
      </header>

      <section id="overview" className="overview-section gradient-section dark-gradient-section" data-aos="fade-up">
        <h2>Обзор</h2>
        <p>Наше приложение предоставляет полный спектр услуг по доставке и управлению топливом, позволяя контролировать процесс с любого устройства и в любое время.</p>
        <div className="overview-video-wrapper">
          <video className="overview-video" controls>
            <source src={overviewVideo} type="video/mp4" />
            Ваш браузер не поддерживает видео-теги.
          </video>
        </div>
        <div className="features-navigation updated-navigation">
          <div className="feature" data-aos="fade-up">
            <FaHome className="feature-icon updated-feature-icon" />
            <h3 className="feature-title">Главная страница</h3>
            <p>Доступ к основным функциям и информации, включая текущие заказы и состояние услуг. Все действия можно выполнять с интуитивно понятной главной страницы, где отображаются основные данные и статистика.</p>
          </div>
          <div className="feature" data-aos="fade-up">
            <FaClipboardList className="feature-icon updated-feature-icon" />
            <h3 className="feature-title">Заказы</h3>
            <p>Создание и управление заказами топлива, история заказов и статусы. Здесь вы можете легко отслеживать каждый заказ, контролировать выполнение и получать уведомления о статусе доставки.</p>
            <img src={moduleImage1} alt="Module Orders" className="module-image" />
          </div>
          <div className="feature" data-aos="fade-up">
            <FaChartPie className="feature-icon updated-feature-icon" />
            <h3 className="feature-title">Аналитика</h3>
            <p>Доступ к аналитическим данным по расходу топлива и эффективности использования. Используйте детализированные отчеты для повышения эффективности и оптимизации расходов.</p>
            <img src={moduleImage2} alt="Module Analytics" className="module-image" />
          </div>
          <div className="feature" data-aos="fade-up">
            <FaBell className="feature-icon updated-feature-icon" />
            <h3 className="feature-title">Уведомления</h3>
            <p>Настройка уведомлений о доставке и изменениях в статусе заказов. Вы никогда не пропустите важные события благодаря удобной системе оповещений.</p>
          </div>
          <div className="feature" data-aos="fade-up">
            <FaCog className="feature-icon updated-feature-icon" />
            <h3 className="feature-title">Настройки</h3>
            <p>Настройка профиля клиента и предпочтений для улучшения опыта использования. Вы можете гибко адаптировать приложение под свои потребности и управлять информацией, доступной в вашем личном кабинете.</p>
            <img src={moduleImage3} alt="Module Settings" className="module-image" />
          </div>
        </div>
      </section>

      <section id="modules" className="modules-section gradient-section dark-gradient-section" data-aos="fade-up">
        <h2>Модули</h2>
        <div className="module-cards">
          <div className="module-card" data-aos="fade-up">
            <h3>Управление заказами</h3>
            <p>Полный контроль за оформлением и выполнением заказов на доставку топлива. Система позволяет быстро оформлять заказы и отслеживать их статус в реальном времени.</p>
          </div>
          <div className="module-card" data-aos="fade-up">
            <h3>Аналитика и отчеты</h3>
            <p>Получайте подробные отчеты по расходам и использованию топлива. Аналитические инструменты помогут вам лучше понять потребности и оптимизировать расход.</p>
          </div>
          <div className="module-card" data-aos="fade-up">
            <h3>Интеграция с поставщиками</h3>
            <p>Быстрая интеграция с поставщиками для управления поставками топлива. Мы обеспечиваем эффективное взаимодействие с вашими партнерами для обеспечения своевременной доставки топлива.</p>
          </div>
        </div>
      </section>

      <section id="features" className="features-section gradient-section dark-gradient-section" data-aos="fade-up">
        <h2>Возможности</h2>
        <ul className="features-list">
          <li data-aos="fade-up">Реальное время отслеживания доставки топлива</li>
          <li data-aos="fade-up">Простое управление заказами через мобильное приложение</li>
          <li data-aos="fade-up">Автоматические уведомления о статусе заказа</li>
        </ul>
      </section>

      <section id="about" className="about-section gradient-section dark-gradient-section" data-aos="fade-up">
        <h2>О компании</h2>
        <div className="about-content">
          <p className="about-text">Наша компания осуществляет реализацию нефтепродуктов по всей территории страны, а наша специализация – поставка автомобильным транспортом бензина и дизельного топлива. НОРД – это инновационная компания, которая внедряет передовые технологии, предлагая высокое качество продукта и сервиса.</p>
          <p className="about-text">Для получения дополнительной информации посетите наш официальный сайт <a href="http://nordrussia.ru/" target="_blank" rel="noopener noreferrer" className="about-link">nordrussia.ru</a>.</p>
        </div>
        <div className="contact-info">
          <FaPhoneAlt className="contact-icon" />
          <span>+7 (800) 555-35-35</span>
        </div>
        <div className="contact-button-wrapper">
          <button className="cta-button" onClick={() => window.open("http://nordrussia.ru/", "_blank")}>Посетить наш сайт</button>
        </div>
      </section>

      <section id="download" className="download-section gradient-section dark-gradient-section" data-aos="fade-up">
        <div className="download-content">
          <div className="download-text">
            <h2>Скачать приложение</h2>
            <p>Получите доступ ко всем нашим услугам через мобильное приложение. Скачайте его сейчас:</p>
            <div className="download-buttons">
              <button className="download-button" data-aos="fade-up">
                <FaApple className="download-icon" /> App Store
              </button>
              <button className="download-button" data-aos="fade-up">
                <FaGooglePlay className="download-icon" /> Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer gradient-section dark-gradient-section">
        <p>&copy; 2024 НОРД. Все права защищены.</p>
        <button className="scroll-to-top" onClick={scrollToTop}><FaArrowUp className="scroll-to-top-icon" /></button>
      </footer>
    </div>
  );
}

export default App;