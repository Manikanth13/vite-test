import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './stores';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './index.css';

const app = createApp(App)

library.add(fas);

app.component('fa', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layer-text', FontAwesomeLayersText)

app.use(router);

app.use(store);

app.mount("#app");

// createApp(App).use(store).use(router).mount('#app').component('fa', FontAwesomeIcon);
