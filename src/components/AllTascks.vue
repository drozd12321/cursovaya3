<template>
  <Loader v-if="isload" />
  <div>
    <h2>Всего активных задач: {{ geCountActivTasks }}</h2>
  </div>
  <OneTack
    v-for="task in gettasks"
    :name="task.name"
    :dt="task.dt"
    :txt="task.txt"
    :id="task.id"
    :aciv="task.act"
  />
</template>
<script setup>
import { useStore } from "vuex";
import OneTack from "./OneTack.vue";
import { computed, onMounted, watch } from "vue";
import Loader from "./Loader.vue";
const state = useStore();
const isload = computed(() => state.getters.getLoading);
const gettasks = computed(() => state.getters.getTasks);
const geCountActivTasks = computed(() => state.getters.getActivTasks);
onMounted(async () => {
  state.dispatch("getTasks");
});
</script>
<style scoped>
h2 {
  text-align: center;
}
</style>
