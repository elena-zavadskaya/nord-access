<template>
  <nav class="nav-planets">
    <ul>
      <li v-for="(planet, index) in planets" :key="index">
        <a
          :href="'#' + planet.id"
          :class="['planet', 'planet-' + (index + 1)]"
          @click.prevent="scrollTo(planet.id)"
          :title="planet.title"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavPlanets',
  data() {
    return {
      planets: [
        { id: 'home', title: 'Главная' },
        { id: 'skills', title: 'Навыки' },
        { id: 'experience', title: 'Опыт' },
        { id: 'projects', title: 'Проекты' },
        { id: 'contact', title: 'Контакты' }
      ]
    }
  },
  methods: {
    scrollTo(section) {
      document.getElementById(section).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.nav-planets {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
}

.nav-planets ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-planets li {
  margin: 25px 0;
  position: relative;
}

.planet {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.planet:hover {
  transform: scale(1.5);
}

.planet::after {
  content: attr(title);
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.7);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.planet:hover::after {
  opacity: 1;
}

.planet-1 {
  background: #FF6B6B;
  box-shadow: 0 0 10px #FF6B6B;
}

.planet-2 {
  background: #4ECDC4;
  box-shadow: 0 0 10px #4