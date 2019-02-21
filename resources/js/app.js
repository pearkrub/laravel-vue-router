require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import App from './views/App';
import routes from './route';

const router = new VueRouter({
    mode: 'hash',
    routes: routes.routes,
});

Vue.component('app-component', App);
const app = new Vue({
    el: '#app',
    router,
});
