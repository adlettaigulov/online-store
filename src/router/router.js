import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog/Catalog'
import Cart from '@/components/Cart/Cart'
import About from '@/components/About'
import Delivery from '@/components/Delivery'
import Payment from '@/components/Payment'

// Подключение Router
Vue.use(Router)

// Указание путей страниц
let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            props: true, // если хотим передавать с компонентом какие-либо данные
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/delivery',
            name: 'delivery',
            component: Delivery,
        },
        {
            path: '/payment',
            name: 'payment',
            component: Payment,
        }
    ],
});

export default router;