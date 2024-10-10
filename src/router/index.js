import { createRouter, createWebHashHistory } from 'vue-router';
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
    history: createWebHashHistory(),
    routes,
});

export default router;
