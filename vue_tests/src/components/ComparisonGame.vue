<template>
  <div class="game-container comparison-container">
    <button @click="$emit('goHome')">← Назад</button>
    <h1>Игра "Сравнение объектов"</h1>
    <p>
      <strong>"Сравнение объектов"</strong> — это игра для развития произвольного внимания и концентрации.
    </p>
    <p>
      <strong>Цель игры:</strong> Сравнить два изображения и определить, совпадают ли они.
    </p>
    <p>
      Игра помогает тренировать внимание, увеличивать концентрацию и улучшать способность к быстрому анализу. Удачи!
    </p>

    <div v-if="!gameStarted" class="buttons">
      <button class="start-button" @click="startGame">Начать игру</button>
    </div>

    <div v-else>
      <div class="info">
        <p>Время: {{ formattedTime }}</p>
        <p>Жизни: {{ lives }}</p>
      </div>

      <div class="game-area">
        <div class="image-container">
          <div v-for="(symbol, index) in leftImage" :key="index" class="symbol">
            {{ symbol }}
          </div>
        </div>
        <div class="image-container">
          <div v-for="(symbol, index) in rightImage" :key="index" class="symbol">
            {{ symbol }}
          </div>
        </div>
      </div>

      <p class="instruction">Совпадают ли изображения?</p>

      <div class="choices">
        <button class="choice-button" @click="handleAnswer(false)">Нет</button>
        <button class="choice-button" @click="handleAnswer(true)">Да</button>
      </div>

      <p class="message" :class="{ correct: isCorrect, incorrect: !isCorrect }">{{ message }}</p>
    </div>

    <div v-if="gameEnded" class="end-message">
      <h3>Игра завершена!</h3>
      <p>Правильных ответов: {{ correctAnswers }} из {{ totalAnswers }}</p>
      <p>Точность: {{ accuracy }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      gameEnded: false,
      timeLeft: 90, // 1,5 минуты
      timer: null,
      lives: 3,
      symbolsCount: 2, // Начальное количество символов
      maxSymbolsCount: 6, // Максимальное количество символов
      leftImage: [],
      rightImage: [],
      imagesMatch: false,
      message: "",
      isCorrect: null,
      correctAnswers: 0,
      totalAnswers: 0,
      symbols: ["🔲", "⚫", "⬛", "▷", "▼", "▲", "▽", "🔘"],
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeLeft / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (this.timeLeft % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    },
    accuracy() {
      return this.totalAnswers > 0
        ? Math.round((this.correctAnswers / this.totalAnswers) * 100)
        : 0;
    },
  },
  methods: {
    goBack() {
      window.location.href = "/"; // Возвращение на главную
    },
    startGame() {
      this.gameStarted = true;
      this.gameEnded = false;
      this.timeLeft = 90;
      this.lives = 3;
      this.correctAnswers = 0;
      this.totalAnswers = 0;
      this.symbolsCount = 2;
      this.message = "";

      this.generateImages();
      this.startTimer();
    },
    startTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          this.endGame();
        }
      }, 1000);
    },
    generateImages() {
      const leftImage = Array.from({ length: this.symbolsCount }, () =>
        this.symbols[Math.floor(Math.random() * this.symbols.length)]
      );
      const rightImage = [...leftImage];

      this.imagesMatch = Math.random() < 0.7;
      if (!this.imagesMatch) {
        const randomIndex = Math.floor(Math.random() * rightImage.length);
        let randomSymbol;
        do {
          randomSymbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
        } while (randomSymbol === rightImage[randomIndex]);
        rightImage[randomIndex] = randomSymbol;
      }

      this.leftImage = leftImage;
      this.rightImage = rightImage;
    },
    handleAnswer(answer) {
      this.totalAnswers++;
      if (answer === this.imagesMatch) {
        this.message = "Правильно!";
        this.isCorrect = true;
        this.correctAnswers++;
      } else {
        this.message = "Неправильно!";
        this.isCorrect = false;
        this.lives--;
      }

      if (this.lives === 0 || this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.endGame();
      } else {
        if (this.correctAnswers % 3 === 0 && this.symbolsCount < this.maxSymbolsCount) {
          this.symbolsCount++; // Увеличиваем сложность каждые 3 правильных ответа
        }
        setTimeout(() => {
          this.message = "";
          this.generateImages();
        }, 1000);
      }
    },
    endGame() {
      this.gameStarted = false;
      this.gameEnded = true;
    },
  },
};
</script>

<style src="../assets/comparisonGame.css"></style>