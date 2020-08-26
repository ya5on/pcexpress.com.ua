import axios, * as others from 'axios'

export const strict = false // костыль!!!

export const state = () => ({
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
  favorites: []

});
//-------------------------------MUTATIONS-----------------------------
export const mutations = {
  SET_CATEGORIES_LIST: (state, categories) => {
    state.categories = categories
  },
  SET_PRODUCTS: (state, products) => {
    state.products = products
  },
  SET_TAB_PRODUCTS: (state, tabProducts) => {
    state.tabProducts = tabProducts
  },
  SET_PRODUCT: (state, product) => {
    state.product = product
  },
  //
  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category
  },
  //---------------------------------------------------------------------CART--
  addProductToCart(state, product){
    const addedProduct = state.cart.find(c => c.id === product.id);
    if (addedProduct){
      addedProduct.qty++
    } else {
      state.cart.push({...product, qty: 1})
    }
  },
  addQty(state, id){
    const currentProduct = state.cart.find(c => c.id === id);
    currentProduct.qty++
  },
  reduceQty(state, id){
    const currentProduct = state.cart.find(c => c.id === id);
    if (currentProduct.qty > 1){
      currentProduct.qty--
    } else {
      state.cart = state.cart.filter(c => c.id !== id);
    }
  },
  removeFromCart(state, id){
    state.cart = state.cart.filter(c => c.id !== id);
  },
  //-------------------------------------------------------------------FAVORITES
  addToFavorites(state, product){
    const addedProduct = state.favorites.find(c => c.id === product.id);
    if (addedProduct){
      alert("Уже в избранном!")
    } else {
      state.favorites.push({...product, qty: 1})
    }
  },
  removeFromFavorites(state, product){
    let index = state.favorites.indexOf(product);
    if (index > -1) {
      state.favorites.splice(index, 1);
    }
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
  //---------------------------------------------------------------------
};
//-------------------------------ACTIONS-----------------------------
export const actions = {
  addToCart({commit}, product){
    commit('addProductToCart', product)
  },
  addQty({commit}, id){
    commit('addQty', id)
  },
  reduceQty({commit}, id){
    commit('reduceQty', id)
  },
  removeFromCart({commit}, id){
    commit('removeFromCart', id)
  },

  async GET_CATEGORIES_LIST({commit}) {
    const categories = await axios('https://b2b.nikolink.com/api/get-cat.php', {
      method: "GET",
      params: {
        token: "0e94e098eac6e56a22496613b325473b7de8cb0a"
      }
    })
    commit('SET_CATEGORIES_LIST', categories.data);
    return categories;
  },
  async GET_PRODUCTS({commit}, {cat}) {
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
  async TAB_PRODUCTS({commit}, {cat}) {
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
  async GET_PRODUCT({commit}, {id}) {
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
};
//-------------------------------GETTERS-----------------------------
export const getters = {
  ALL_CATS(state) {
    return state.categories;
  },
  MAIN_CATS(state) {
    return state.categories.filter(c => c.parent_id === 0);
  },
  SUB_CATS: state => id => {
    return state.categories.filter(c => c.parent_id === id);
  },
  CAT: state => route => {
    return state.categories.find(c => c.id === route.params.id)
  },
  PRODUCTS(state) {
    return state.products;
  },
  TAB_PRODUCTS(state) {
    return state.tabProducts;
  },
  PRODUCT(state) {
    return state.product;
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
  cart: state => {
    return state.cart
  },
//---------------------------------------------------------------------

};
