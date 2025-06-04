<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <h1 class="animate__animated animate__fadeInDown">Привет, я <span class="highlight">[Ваше Имя]</span></h1>
      <h2 class="animate__animated animate__fadeIn animate__delay-1s">Креативный маркетолог</h2>
      <p class="animate__animated animate__fadeIn animate__delay-2s">Превращаю идеи в прибыльные стратегии</p>
      <button
        class="cta-button animate__animated animate__pulse animate__infinite"
        @click="scrollTo('skills')"
      >
        Исследовать мои навыки
      </button>
    </div>
    <div class="hero-orbits">
      <div class="orbit orbit-1"></div>
      <div class="orbit orbit-2"></div>
      <div class="planet planet-main"></div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollTo(section) {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 10%;
}

.hero-content {
  z-index: 2;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.hero-content h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: 400;
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 30px;
}

.highlight {
  color: #4fc08d;
  text-shadow: 0 0 10px rgba(79, 192, 141, 0.7);
}

.cta-button {
  background: linear-gradient(45deg, #4fc08d, #3aaed8);
  border: none;
  padding: 15px 30px;
  color: white;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
  transition: transform 0.3s;
  font-size: 1rem;
  outline: none;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(79, 192, 141, 0.5);
}

/* Анимации орбит и планет */
.hero-orbits {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.orbit-1 {
  width: 100%;
  height: 100%;
}

.orbit-2 {
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
  animation-direction: reverse;
}

.planet-main {
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #4fc08d, #3aaed8);
  border-radius: 50%;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  box-shadow: 0 0 30px rgba(79, 192, 141, 0.7);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@media (max-width: 1024px) {
  .hero-orbits {
    width: 300px;
    height: 300px;
    right: 5%;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 5%;
  }

  .hero-orbits {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 50px;
    width: 250px;
    height: 250px;
  }
}
</style>