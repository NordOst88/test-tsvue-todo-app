import { createStore } from "vuex";
import { ToDo } from "./types";
import Axios from "axios";

export default createStore({
  state: {
    todos: [] as ToDo[],
    loading: false
  },
  mutations: {
    SET_TODO: (state, payload) => (state.todos = payload),
    ADD_TODO: (state, payload) => state.todos.push(payload),
    FILTER_TODO: (state, id) =>
      (state.todos = state.todos.filter(t => t.id !== id)),
    TOGGLE_LOADING: state => (state.loading = !state.loading)
  },
  actions: {
    GET_TODO: async context => {
      context.commit("TOGGLE_LOADING");
      const { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      context.commit("TOGGLE_LOADING");
      context.commit("SET_TODO", data);
    },
    SAVE_TODO: (context, payload) => context.commit("ADD_TODO", payload),
    REMOVE_TODO: (context, payload) => context.commit("FILTER_TODO", payload)
  },
  getters: {
    LOADING: state => state.loading,
    TODOS: state => state.todos
  }
});
