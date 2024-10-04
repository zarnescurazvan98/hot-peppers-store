// store/modules/cart.js
const state = {
    cartItems: [],
};

const getters = {
    cartItems: (state) => state.cartItems,
    cartTotal: (state) =>
        state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
};

const mutations = {
    ADD_PRODUCT(state, product) {
        const existingProduct = state.cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += product.quantity; // Increment quantity if product already exists
        } else {
            state.cartItems.push(product);
        }
    },
    REMOVE_PRODUCT(state, productId) {
        state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
    UPDATE_PRODUCT_QUANTITY(state, { productId, quantity }) {
        const product = state.cartItems.find(item => item.id === productId);
        if (product) {
            product.quantity = quantity; // Update the quantity of the product
        }
    },
};

const actions = {
    addProduct({ commit }, product) {
        commit('ADD_PRODUCT', product);
    },
    removeProduct({ commit }, productId) {
        commit('REMOVE_PRODUCT', productId);
    },
    updateProductQuantity({ commit }, { productId, quantity }) {
        commit('UPDATE_PRODUCT_QUANTITY', { productId, quantity });
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
