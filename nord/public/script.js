// Скрипты для анимаций и интерактивности
document.addEventListener('DOMContentLoaded', () => {
  console.log('Сайт загружен');

  // Анимация кнопок при наведении
  const buttons = document.querySelectorAll('.download-link');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.05)';
      button.style.transition = 'transform 0.2s';
    });

    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });

  // Плавное появление секций при прокрутке
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  });

  // Изначальное скрытие элементов для анимации
  sections.forEach(section => {
    section.classList.add('hidden');
  });
});
