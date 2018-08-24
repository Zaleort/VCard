import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './views/Inicio.vue';
import Sobre from './views/Sobre.vue';
import Faq from './views/Faq.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio,
        },
        {
            path: '/sobre',
            name: 'sobre',
            component: Sobre,
        },
        {
            path: '/faq',
            name: 'faq',
            component: Faq,
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Sobre,
        },
    ],
});
