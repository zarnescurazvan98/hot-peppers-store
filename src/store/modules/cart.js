export default {
    state: {
        items: [],
    },
    mutations: {
        ADD_TO_CART(state, product) {
            const existingProduct = state.items.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;  // Increment quantity by the selected amount
            } else {
                state.items.push({ ...product, quantity: product.quantity });  // Add new product with the selected quantity
            }
        },
        REMOVE_FROM_CART(state, productId) {
            state.items = state.items.filter(item => item.id !== productId);
        },
    },
    actions: {
        addProduct({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
        removeProduct({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId);
        },
    },
    getters: {
        cartItems: state => state.items,
        cartTotal: state =>
            state.items.reduce((total, product) => total + product.price * product.quantity, 0),
    },
};
