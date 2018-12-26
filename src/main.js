import Vue from 'vue'
import App from './app';
import router from './route';
import 'sushi-ui';
import 'highlight.js/styles/github-gist.css';
import './assets/style/static.css';
import demoBlock from './components/demo-block.vue';
import ElementUi from 'element-ui';
import ZnlUI from 'vue-znl-ui';
import ZnlTable from 'znl-table';
import 'znl-table/dist/znl-table.css';

Vue.component('demo-block', demoBlock);
Vue.component('znl-table', ZnlTable);
Vue.use(ElementUi)
Vue.use(ZnlUI)
// Vue.use(ZnlTable)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
