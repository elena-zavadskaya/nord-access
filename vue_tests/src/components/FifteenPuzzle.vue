<template>
  <div class="game-container fifteen-container">
    <button @click="$emit('goHome')">← Назад</button>
    <h1>Логическая игра "Пятнашки"</h1>
    <p>
      <strong>"Пятнашки"</strong> — это головоломка на поле 4x4, состоящая из 15 костяшек и одной пустой клетки.
    </p>
    <p>
      <strong>Цель игры:</strong> упорядочить костяшки по возрастанию, начиная с левого верхнего угла. Нажимайте на костяшки рядом с пустой клеткой, чтобы перемещать их.
      Задача — собрать головоломку за наименьшее количество ходов.
    </p>
    <p>
      Для таких игр характерно большое количество комбинаций. Чтобы успешно решить задачу, просчитывайте ходы на несколько шагов вперёд, развивая критическое мышление. Удачи!
    </p>

    <div class="game-board grid">
      <button
        v-for="(tile, index) in tiles"
        :key="index"
        :class="['tile', tile === '' ? 'empty' : '']"
        @click="moveTile(index)"
      >
        {{ tile }}
      </button>
    </div>

    <div class="info">
      <p>Ходы: {{ moves }}</p>
      <p>Прошедшее время: {{ formattedTime }}</p>
    </div>

    <div class="buttons">
      <button class="button start-button" @click="startGame">
        {{ gameStarted ? 'Перезапуск' : 'Начать игру' }}
      </button>
      <button class="button" @click="testVictory">Проверить победу</button>
    </div>

    <div v-if="gameEnded" class="end-message">
      <h3>{{ endMessage }}</h3>
      <p>Количество ходов: {{ moves }}</p>
      <p>Время на решение: {{ formattedTime }}</p>
      <p>{{ motivationalMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiles: [], // Массив плиток
      moves: 0, // Количество ходов
      timeElapsed: 0, // Время, прошедшее с начала игры
      timer: null, // Таймер для отслеживания времени
      gameStarted: false, // Статус начала игры
      gameEnded: false, // Статус завершения игры
      endMessage: '', // Сообщение о завершении игры
    };
  },
  computed: {
    // Форматированное время в виде мм:сс
    formattedTime() {
      const minutes = Math.floor(this.timeElapsed / 60).toString().padStart(2, '0');
      const seconds = (this.timeElapsed % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    },
    // Мотивационное сообщение, которое зависит от количества ходов
    motivationalMessage() {
      if (this.moves <= 50) return 'Феноменальный результат! Вы прирождённый стратег!';
      if (this.moves <= 150) return 'Отличная работа! Вы проявили аналитическое мышление.';
      if (this.moves <= 300) return 'Хорошо! Немного практики, и результат улучшится.';
      return 'Вы сделали это! Продолжайте тренироваться для улучшения навыков.';
    },
  },
methods: {
  goBack() {
    window.location.href = '/'; // Возвращение на главную
  },
  initializeTiles() {
    this.tiles = [...Array(15).keys()].map((i) => (i + 1).toString()).concat(''); // Массив плиток
    this.shuffleTiles(); // Перемешиваем плитки
  },
  // Перемешивание плиток
  shuffleTiles() {
    for (let i = this.tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
    }
  },
  // Проверка на победу
  isSolved() {
    return this.tiles.join('') === '123456789101112131415'; // Проверка на правильный порядок плиток
  },
  // Перемещение плитки
  moveTile(index) {
    if (!this.gameStarted || this.gameEnded) return; // Если игра не началась или закончена, не двигаем плитки

    const emptyIndex = this.tiles.indexOf(''); // Индекс пустой плитки
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 4, emptyIndex + 4]; // Возможные ходы (по вертикали и горизонтали)

    // Если плитка рядом с пустой, меняем их местами
    if (validMoves.includes(index)) {
      [this.tiles[emptyIndex], this.tiles[index]] = [this.tiles[index], this.tiles[emptyIndex]];
      this.moves++; // Увеличиваем количество ходов
      if (this.isSolved()) this.endGame(true); // Если выиграли, заканчиваем игру
    }
  },
  // Начало игры (сброс состояния и таймера)
  startGame() {

    clearInterval(this.timer); // Останавливаем предыдущий таймер
    this.timeElapsed = 0;
    this.moves = 0;
    this.gameStarted = true;
    this.gameEnded = false;
    this.initializeTiles(); // Инициализация плиток

    // Запускаем таймер
    this.timer = setInterval(() => this.timeElapsed++, 1000);
  },

  // Завершение игры
  endGame(success) {
    clearInterval(this.timer); // Останавливаем таймер
    this.gameEnded = true;
    this.endMessage = success
      ? 'Поздравляем! Вы успешно собрали головоломку!'
      : 'Игра завершена.';
    },
    testVictory() {
      this.tiles = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];
      this.moves = 233; // Условное количество ходов
      this.timeElapsed = 600; // Условное время (10 минут)
      this.endGame(true);
    },
  },
};
</script>
<style src="../assets/fifteenPuzzle.css"></style>