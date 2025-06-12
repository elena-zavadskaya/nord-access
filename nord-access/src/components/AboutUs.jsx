import React from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <h2 className="about__title">О нас</h2>
        <p className="about__text">
          Приложение разработано сотрудниками, имеющими многолетний опыт работы в сфере нефтепродуктообеспечения. Глубоко понимая специфику топливного рынка, мы объединили свои знания и практический опыт для эффективного управления закупкой, реализацией и доставкой топлива.
        </p>
        <p className="about__text">
          Наше решение автоматизирует процессы нефтетрейдинга, минимизирует риски и повышает рентабельность бизнеса.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
