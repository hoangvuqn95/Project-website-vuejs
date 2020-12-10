import Vue from 'vue';
import App from './App';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import VueRouter from 'vue-router';
// import Routes from './routes';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes: Routes,
//     mode: 'history'
// });

new Vue({
    el: '#app',
    render: h => h(App),
});
