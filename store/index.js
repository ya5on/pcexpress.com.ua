import axios, * as others from 'axios'

export const state = () => ({
  categories: [],
  products: [],
  product: {}
});

export const mutations = {
  SET_CATEGORIES_LIST:(state, categories) => {
    state.categories = categories
  },
  SET_PRODUCTS:(state, products) => {
    state.products = products
  },
  SET_PRODUCT:(state, product) => {
    state.product = product
  },

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
  PRODUCT(state){
    return state.product;
  }
};
