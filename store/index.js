import Vue from 'vue'
import axios, * as others from 'axios'

export const strict = false // костыль!!!

export const state = () => ({
  searchValue: '',
  categories: [],
  products: [],
  tabProducts: [],
  product: [],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    name: '',
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
  },
  cart: [],
  cartCount: 0,

});

export const mutations = {
  SET_CATEGORIES_LIST:(state, categories) => {
    state.categories = categories
  },
  SET_PRODUCTS:(state, products) => {
    state.products = products
  },
  SET_TAB_PRODUCTS:(state, tabProducts) => {
    state.tabProducts = tabProducts
  },
  SET_PRODUCT:(state, product) => {
    state.product = product
  },
  SET_SEARCH_VALUE:(state, value) => {
    state.searchValue = value
  },
  //---------------------------------------------------------------------
  addToCart(state, product) {
    let found = state.cart.find(p => p.id === product.id);

    if (found) {
      found.quantity ++;
      found.totalPrice = found.quantity * found.price;
    } else {
      state.cart.push(product);

      Vue.set(product, 'quantity', 1);
      Vue.set(product, 'totalPrice', product.price);
    }

    state.cartCount++;
    this.commit('saveCart');
  },
  removeFromCart(state, product) {
    let index = state.cart.indexOf(product);

    if (index > -1) {
      let product = state.cart[index];
      state.cartCount -= product.quantity;

      state.cart.splice(index, 1);
    }
    this.commit('saveCart');
  },
  saveCart(state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
    window.localStorage.setItem('cartCount', state.cartCount);
  },
  // storeCart(state) {
  //   let parsed = JSON.stringify(this.cart);
  //   localStorage.setItem('cart', parsed)
  //   this.viewStorageCart();
  // },

  // viewStorageCart () {
  //   if(localStorage.getItem('cart')) {
  //     this.cartList = JSON.parse(localStorage.getItem('cart'))
  //   }
  // },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  //---------------------------------------------------------------------
  SET_USER(state, authUser) {
    state.authUser = authUser
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  //---------------------------------------------------------------------
};

export const actions = {
  async GET_CATEGORIES_LIST({commit}) {
    const categories = await axios('https://b2b.nikolink.com/api/get-cat.php',{
      method: "GET",
      params: {
        token: "0e94e098eac6e56a22496613b325473b7de8cb0a"
      }
    })
    commit('SET_CATEGORIES_LIST', categories.data);
    return categories;

  },
  async GET_PRODUCTS({ commit }, { cat }) {
    const products = await axios("https://b2b.nikolink.com/api/get-items.php", {
      method: "GET",
      params: {
        cat,
        token: "0e94e098eac6e56a22496613b325473b7de8cb0a"
      }
    })
    commit('SET_PRODUCTS', products.data)
    return products
  },
  async TAB_PRODUCTS({ commit }, { cat }) {
    const tabProducts = await axios("https://b2b.nikolink.com/api/get-items.php", {
      method: "GET",
      params: {
        cat,
        token: "0e94e098eac6e56a22496613b325473b7de8cb0a"
      }
    })
    commit('SET_TAB_PRODUCTS', tabProducts.data)
    return tabProducts
  },
  async GET_PRODUCT({ commit }, { id }) {
    const product = await axios("https://b2b.nikolink.com/api/get-item.php", {
      method: "GET",
      params: {
        id,
        token: "0e94e098eac6e56a22496613b325473b7de8cb0a",
      }
    })
    commit('SET_PRODUCT', product.data)
    return product
  },
  async GET_SEARCH_VALUE({commit}, value){
    const searchValue = await axios("https://b2b.nikolink.com/api/get-items.php", {
      method: "GET",
      params: {
        value,
        token: "0e94e098eac6e56a22496613b325473b7de8cb0a",
      }
    })
    commit('SET_SEARCH_VALUE', value)
    return searchValue
  },
};

export const getters = {
  ALL_CATS(state){
    return state.categories;
  },
  MAIN_CATS(state){
    return state.categories.filter(c => c.parent_id === 0);
  },
  SUB_CATS: state => id => {
    return state.categories.filter(c => c.parent_id === id);
  },
  PRODUCTS(state){
    return state.products;
  },
  TAB_PRODUCTS(state){
    return state.tabProducts;
  },
  PRODUCT(state){
    return state.product;
  },
  SEARCH_VALUE(state){
    return state.searchValue;
  },
  //---------------------------------------------------------------------login,logout,modals
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
//---------------------------------------------------------------------

};
