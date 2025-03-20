import { createStore } from "vuex";
export const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
  },
});
