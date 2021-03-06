import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';
import InputParam from './components/InputParam.vue';
import OutputTable from './components/OutputTable.vue';
import money from 'v-money3';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'

const app = createApp(App);
app.component('HelloWorld',HelloWorld);
app.component('InputParam',InputParam);
app.component('OutputTable',OutputTable);
app.component('VueSlider', VueSlider)
app.use(money);
app.mount('#app');
