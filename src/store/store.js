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
      console.log(state.tasks);
    },
    changeActiv(state, payload) {
      const task = state.tasks.find((it) => it.id === payload.id);
      if (task) {
        task.act = payload.flag;
      }
    },
  },
  actions: {
    chFlag(context, payload) {
      context.commit("changeActiv", payload);
    },
    async personAddTask() {
      const resp = await fetch(
        "https://frealnce-default-rtdb.firebaseio.com/people.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
        }
      );
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getTaskByID: (state) => (id) => {
      return state.tasks.find((item) => item.id === id);
    },
    getActivTasks(state) {
      return state.tasks.filter((it) => it.act === "default").length;
    },
  },
});
