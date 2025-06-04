<template>
  <section class="skills-section" id="skills">
    <div class="container">
      <h2 class="section-title">Мои <span>навыки</span></h2>
      <div class="skills-grid">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="skill-item"
          :class="'skill-' + (index + 1)"
          @mouseenter="activateSkill(index)"
          @mouseleave="deactivateSkill(index)"
        >
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <h3>{{ skill.name }}</h3>
          <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
          <div class="skill-details" v-show="activeSkill === index">
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      activeSkill: null,
      skills: [
        {
          name: 'Digital Marketing',
          level: 95,
          icon: 'fas fa-bullseye',
          description: 'Стратегии продвижения в digital, работа с рекламными кабинетами, аналитика'
        },
        {
          name: 'SMM',
          level: 90,
          icon: 'fas fa-hashtag',
          description: 'Продвижение в социальных сетях, контент-стратегии, работа с блогерами'
        },
        {
          name: 'Аналитика',
          level: 85,
          icon: 'fas fa-chart-line',
          description: 'Google Analytics, Яндекс.Метрика, Power BI, сквозная аналитика'
        },
        {
          name: 'Копирайтинг',
          level: 80,
          icon: 'fas fa-pen-fancy',
          description: 'Продающие тексты, слоганы, сценарии для видео, email-рассылки'
        },
        {
          name: 'SEO',
          level: 75,
          icon: 'fas fa-search',
          description: 'Поисковая оптимизация, работа с семантическим ядром, технический аудит'
        },
        {
          name: 'UX/UI',
          level: 70,
          icon: 'fas fa-mobile-alt',
          description: 'Прототипирование, юзабилити-тестирование, работа с интерфейсами'
        }
      ]
    }
  },
  methods: {
    activateSkill(index) {
      this.activeSkill = index;
    },
    deactivateSkill(index) {
      if (this.activeSkill === index) {
        this.activeSkill = null;
      }
    }
  }
}
</script>

<style scoped>
.skills-section {
  padding: 100px 0;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 60px;
  text-align: center;
  font-family: 'Playfair Display', serif;
  position: relative;
}

.section-title span {
  color: #4fc08d;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #4fc08d, #3aaed8);
  margin: 15px auto 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.skill-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #4fc08d;
}

.skill-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.skill-level {
  height: 5px;
  background: linear-gradient(to right, #4fc08d, #3aaed8);
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
}

.skill-level::after {
  content: attr(style);
  position: absolute;
  right: 0;
  top: -25px;
  font-size: 0.8rem;
  color: #4fc08d;
}

.skill-details {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
}

/* Индивидуальные цвета для навыков */
.skill-1:hover { border-color: #FF6B6B; }
.skill-2:hover { border-color: #4ECDC4; }
.skill-3:hover { border-color: #FFE66D; }
.skill-4:hover { border-color: #FF9F1C; }
.skill-5:hover { border-color: #9B59B6; }
.skill-6:hover { border-color: #1ABC9C; }

.skill-1 .skill-icon { color: #FF6B6B; }
.skill-2 .skill-icon { color: #4ECDC4; }
.skill-3 .skill-icon { color: #FFE66D; }
.skill-4 .skill-icon { color: #FF9F1C; }
.skill-5 .skill-icon { color: #9B59B6; }
.skill-6 .skill-icon { color: #1ABC9C; }

.skill-1 .skill-level { background: linear-gradient(to right, #FF6B6B, #FF8E8E); }
.skill-2 .skill-level { background: linear-gradient(to right, #4ECDC4, #7FDBFF); }
.skill-3 .skill-level { background: linear-gradient(to right, #FFE66D, #FFFA65); }
.skill-4 .skill-level { background: linear-gradient(to right, #FF9F1C, #FFBF69); }
.skill-5 .skill-level { background: linear-gradient(to right, #9B59B6, #BE90D4); }
.skill-6 .skill-level { background: linear-gradient(to right, #1ABC9C, #2ECC71); }

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
}
</style>