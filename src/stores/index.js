import Vuex, { createStore, createLogger } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Cookies from 'js-cookie';
import VuexPersistence from 'vuex-persist';

import productDetails from './productDetails';
import userDetails from './userDetails';

// import { products } from '../stores/productDetails'

const debug = process.env.NODE_ENV !== 'production'

export const PRODUCT_STORAGE = 'PRODUCT_STORAGE'

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })
// storage: window.localStorage

const store = new Vuex.Store({
  modules: { productDetails, userDetails },
  plugins: [new VuexPersistence().plugin, createPersistedState({
    storage: localStorage.setItem(PRODUCT_STORAGE, JSON.stringify())
  })]
})

export default store

// export default createStore({
//   modules: {
//     productDetails
//   },
//   plugins: [createLogger(), vuexLocal.plugin],
// })
