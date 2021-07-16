// import '@babel/polyfill'
// import 'mutationobserver-shim'
// import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
<script src="../src/custom.js"></script>


createApp(App)
    .use(router)
    .mount('#app');
