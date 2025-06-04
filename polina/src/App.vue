<template>
  <div id="app" class="galaxy-bg">
    <NavPlanets />
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />

    <!-- Фоновые звезды -->
    <div class="stars"></div>
    <div class="stars stars2"></div>
    <div class="stars stars3"></div>
  </div>
</template>

<script>
import NavPlanets from './components/NavPlanets.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    NavPlanets: NavPlanets,
    HeroSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection
  }
}
</script>

<style scoped>
.galaxy-bg {
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  min-height: 100vh;
  color: white;
  overflow-x: hidden;
  position: relative;
  font-family: 'Montserrat', sans-serif;
}

/* Анимация звездного фона */
.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  display: block;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-4v-1h4v-4h1v4zm-7 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 0;
}

.stars2 {
  background-size: 150px;
  animation: animStar 100s linear infinite;
}

.stars3 {
  background-size: 80px;
  animation: animStar 150s linear infinite;
  opacity: 0.5;
}

@keyframes animStar {
  from { transform: translateY(0); }
  to { transform: translateY(-1000px); }
}
</style>