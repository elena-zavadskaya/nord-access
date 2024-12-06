import { createApp } from 'vue'; // Импорт Vue
import App from './App.vue'; // Импорт главного компонента приложения
import './assets/global.css'; // Импорт общих стилей приложения

// Создаём приложение и монтируем его на элемент с id="app"
createApp(App).mount('#app');
