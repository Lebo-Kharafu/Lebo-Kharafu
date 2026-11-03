import './styles/tokens.css';
import { createApp } from 'vue';
import App from './App.vue';
import { initThemeTokens } from './utils/date';

// Apply live annual dynamic theme parameters
initThemeTokens();

createApp(App).mount('#app');
