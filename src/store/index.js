import { createStore } from "vuex";

export default createStore({
  state: {
    atualCity: {}
  },
  mutations: {
    SET_ATUAL_CITY(state, payload){
      state.atualCity = payload
    },
  },
  actions: {
    PUT_ATUAL_CITY({commit}, city){
      console.log(city, 'store')
      commit('SET_ATUAL_CITY', city)
    }
  },
  getters: {
    $city(state){
      return state.atualCity
    }
  },
});
