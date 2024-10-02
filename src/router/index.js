import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Products from '../views/ProductsList.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Cart from '../views/ShoppingCart.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: Products },
    { path: '/products/:id', component: ProductDetails, props: true },
    { path: '/cart', component: Cart },
];

const router = createRouter({
    history: createWebHistory(),  // Or use createWebHashHistory for local dev
    routes,
});

export default router;
