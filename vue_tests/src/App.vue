<template>
  <div class="game-container home-container">
    <template v-if="currentPage === 'home'">
      <div class="home-container">
        <h1>Тесты на логику и мышление</h1>
        <p>
          Добро пожаловать! Здесь вы найдёте увлекательные игры и тренажёры, которые помогут вам развивать логику, укреплять память, тренировать внимание и улучшать аналитическое мышление.
        </p>
        <p>
          Вперёд! Тренируйте мозг и получайте удовольствие!
        </p>
        <!-- Кнопки для перехода к играм -->
        <div class="game-buttons">
          <button @click="goToPage('fifteenPuzzle')" class="button">Пятнашки</button>
          <button @click="goToPage('thimblesGame')" class="button">Наперстки</button>
          <button @click="goToPage('comparisonGame')" class="button">Сравнение объектов</button>
        </div>
      </div>
    </template>

    <!-- Компоненты игр -->
    <template v-if="currentPage === 'fifteenPuzzle'">
      <FifteenPuzzle @goHome="goToPage('home')" />
    </template>

    <template v-if="currentPage === 'thimblesGame'">
      <ThimblesGame @goHome="goToPage('home')" />
    </template>

    <template v-if="currentPage === 'comparisonGame'">
      <ComparisonGame @goHome="goToPage('home')" />
    </template>
  </div>
</template>

<script>
// Импорт игровых компонентов
import FifteenPuzzle from './components/FifteenPuzzle.vue';
import ThimblesGame from './components/ThimblesGame.vue';
import ComparisonGame from './components/ComparisonGame.vue';

export default {
  // Подключение компонентов для использования в шаблоне
  components: {
    FifteenPuzzle,
    ThimblesGame,
    ComparisonGame,
  },
  data() {
    return {
      // Переменная для отслеживания текущей страницы
      currentPage: 'home',
    };
  },
  methods: {
    // Метод для смены страницы
    goToPage(page) {
      this.currentPage = page; // Устанавливает значение currentPage, чтобы отобразить нужный компонент
    },
  },
};
</script>

<style>
@import 'assets/global.css';
</style>
