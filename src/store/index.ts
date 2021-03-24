import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const MutaitonTypes = {
  SET_ROUTE: "SET_ROUTE",
};

export type StateType = {
  route: {
    prev: string;
    current: string;
  };
};

export default new Vuex.Store({
  state: {
    route: {
      prev: "",
      current: "",
    },
  },
  mutations: {
    [MutaitonTypes.SET_ROUTE](state, next) {
      state.route.prev = state.route.current;
      state.route.current = next;
    },
  },
  actions: {},
  modules: {},
});
