<template>
  <form class="grid" @submit.prevent="loadTask">
    <h2 class="h2">Созать новую задачу</h2>
    <div class="nm">
      <label for="name">Название</label>
      <input type="text" id="name" v-model="tsk.name" />
    </div>
    <div class="dt">
      <label for="dat">Дата дедлайна</label>
      <input type="date" v-model="tsk.dt" />
    </div>
    <div class="txt">
      <label for="text">Описание</label>
      <textarea name="text" id="text" v-model="tsk.txt"></textarea>
    </div>
    <Button title="Создать" type="submit" :dis="!formDone" />
  </form>
</template>
<script setup>
import Button from "@/ui/Button.vue";
import { v4 as uuidv4 } from "uuid";
import { computed, reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();

const initialState = reactive({
  name: "",
  dt: "",
  txt: "",
});
const loadTask = async () => {
  const dedl = new Date(tsk.dt);
  if (new Date() >= dedl) {
    tsk.act = "noactiv";
    console.log(tsk.dt);
    console.log(new Date());
  } else {
    tsk.act = "default";
  }
  tsk.id = uuidv4();
  await store.dispatch("AddTask", { ...tsk });
  Object.assign(tsk, initialState);
};
const tsk = reactive({ ...initialState });
const formDone = computed(() => {
  return tsk.name.trim() && tsk.txt.trim() && tsk.dt.trim();
});
</script>
<style scoped>
.grid {
  display: grid;
  background-color: burlywood;
  width: 900px;
  padding: 10px;
  border-radius: 5px;
  grid-template-areas:
    "h2 ."
    "nm nm"
    "dt dt"
    "txt txt"
    "btn .";
  margin: 4rem auto;
}
.h2 {
  grid-area: h2;
  font-weight: 400;
}
.btn {
  grid-area: btn;
  width: 40%;
  padding: 7px;
  border: none;
  border-radius: 6px;
  background-color: chocolate;
  color: white;
  font-size: 18px;
  margin-top: 10px;
}
input {
  padding: 7px;
  border-radius: 6px;
  border: 2px solid white;
  outline: none;
  background-color: transparent;
  font-size: 19px;
}
textarea {
  padding: 7px;
  border-radius: 6px;
  border: 2px solid white;
  outline: none;
  background-color: transparent;
  font-size: 15px;
}
.nm {
  grid-area: nm;
  display: flex;
  flex-direction: column;
}
.dt {
  display: flex;
  flex-direction: column;
  grid-area: dt;
}
.txt {
  display: flex;
  flex-direction: column;
  grid-area: txt;
}
.txt textarea {
  resize: none;
  height: 90px;
}
</style>
