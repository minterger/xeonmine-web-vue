import { createApp } from 'vue'
import { createMetaManager, plugin as vueMetaPlugin  } from 'vue-meta'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(createMetaManager()).use(vueMetaPlugin).mount('#app')
