<template>
  <div class="game-container piggy-bank-game">
    <button @click="$emit('goHome')">← Назад</button>
    <h1>Игра "Копилка"</h1>
<p>
  <strong>"Копилка"</strong> — игра на развитие скорости мышления и вычислительных навыков.
</p>
<p>
  <strong>Цель игры:</strong> определить, в какой из копилок больше всего денег. Если суммы равны, вы можете выбрать любую из них.
  С каждым раундом сложность увеличивается: добавляются монеты с номиналом "2".
</p>
<p>
  Внимательно оцените количество монет и их номинал, а также их распределение. Игра помогает тренировать внимание и пространственное мышление. Удачи!
</p>

    <button v-if="!gameStarted" @click="startGame" class="start-button">Начать игру</button>

    <div v-else>
      <div class="info">
        <p>Раунд: {{ currentRound }} / {{ totalRounds }}</p>
      </div>

      <div class="game-area">
        <div class="piggy-bank" @click="handleAnswer('left')">
          <div v-for="(coin, index) in leftBank" :key="'left-' + index" class="coin">
            {{ coin }}
          </div>
        </div>
        <div class="piggy-bank" @click="handleAnswer('right')">
          <div v-for="(coin, index) in rightBank" :key="'right-' + index" class="coin">
            {{ coin }}
          </div>
        </div>
      </div>

      <p v-if="feedback" class="feedback">{{ feedback }}</p>
    </div>

    <div v-if="gameEnded" class="results">
      <h3>Игра завершена!</h3>
      <p>Вы ответили правильно на {{ correctAnswers }} из {{ totalRounds }} раундов.</p>
      <p>Ваш результат: {{ score }}%</p>
      <p class="final-message">{{ finalMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      gameEnded: false,
      currentRound: 0,
      totalRounds: 20,
      correctAnswers: 0,
      score: 0,
      feedback: "",
      leftBank: [],
      rightBank: [],
      maxValue: 1,
    };
  },
  computed: {
    finalMessage() {
      if (this.score >= 80) return "Вы настоящий эксперт! Отличная работа!";
      if (this.score >= 50) return "Хороший результат! Немного практики — и всё получится!";
      return "Возможно, вам стоит попробовать ещё раз!";
    },
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.gameEnded = false;
      this.currentRound = 0;
      this.correctAnswers = 0;
      this.score = 0;
      this.feedback = "";
      this.maxValue = 1;
      this.generateRound();
    },
    generateRound() {
      const leftSize = Math.floor(Math.random() * 5) + 3;
      const rightSize = Math.floor(Math.random() * 5) + 3;
      this.leftBank = this.generateCoins(leftSize);
      this.rightBank = this.generateCoins(rightSize);
    },
    generateCoins(size) {
      const coins = [];
      for (let i = 0; i < size; i++) {
        coins.push(Math.random() < 0.5 ? 1 : this.maxValue);
      }
      return coins;
    },
    handleAnswer(choice) {
      const leftSum = this.leftBank.reduce((acc, coin) => acc + coin, 0);
      const rightSum = this.rightBank.reduce((acc, coin) => acc + coin, 0);

      if (
        (choice === "left" && leftSum >= rightSum) ||
        (choice === "right" && rightSum >= leftSum)
      ) {
        this.feedback = "Правильно!";
        this.correctAnswers++;
      } else {
        this.feedback = "Неправильно!";
      }

      this.currentRound++;
      if (this.currentRound < this.totalRounds) {
        this.maxValue = this.currentRound > 10 ? 2 : 1;
        setTimeout(() => {
          this.feedback = "";
          this.generateRound();
        }, 1500);
      } else {
        this.endGame();
      }
    },
    endGame() {
      this.gameStarted = false;
      this.gameEnded = true;
      this.score = Math.round((this.correctAnswers / this.totalRounds) * 100);
    },
  },
};
</script>

<style src="../assets/piggyBankGame.css"></style>