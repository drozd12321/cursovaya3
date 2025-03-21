import { createStore } from "vuex";
import axios from "axios";
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
    changeActiv(state, payload) {
      const task = state.tasks.find((it) => it.id === payload.id);
      if (task) {
        task.act = payload.flag;
      }
    },
    addTasks(state, tasks) {
      state.tasks = tasks;
    },
  },

  actions: {
    // chFlag(context, payload) {
    //   context.commit("changeActiv", payload);
    // },
    async chFlag(context, payload) {
      context.commit("changeActiv", payload);
      console.log(payload);
      await axios.patch(
        `https://vuehttp-6614a-default-rtdb.europe-west1.firebasedatabase.app/tasks/${payload.idDb}.json`,
        { act: payload.act }
      );
    },
    async AddTask(context, payload) {
      const resp = await fetch(
        "https://vuehttp-6614a-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            act: payload.act,
            dt: payload.dt,
            id: payload.id,
            name: payload.name,
            txt: payload.txt,
          }),
        }
      );
      const firebaseData = await resp.json();
      context.commit("addTask", {
        act: payload.act,
        dt: payload.dt,
        id: payload.id,
        name: payload.name,
        txt: payload.txt,
      });
      console.log(firebaseData);
    },
    async getTasks(context) {
      const resp = await axios.get(
        "https://vuehttp-6614a-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
      );
      const firebaseData = await resp.data;
      const tasks = Object.keys(firebaseData).map((item) => {
        return { ...firebaseData[item], idDb: item };
      });
      context.commit("addTasks", tasks);
      console.log(tasks);
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
