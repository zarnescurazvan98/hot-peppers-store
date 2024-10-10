import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductList from '../views/ProductsList.vue';
import ShoppingCart from '../views/ShoppingCart.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductList },
    { path: '/cart', component: ShoppingCart },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
