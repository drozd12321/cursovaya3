<template>
  <div class="tack">
    <div class="one">
      <h2 class="h2">{{ name }}</h2>
      <AppActive :cl="clss(aciv)" />
    </div>
    <p class="p">{{ dt }}</p>
    <div class="btn">
      <Button title="Посмотреть" @click="goToInfo(id)" />
    </div>
  </div>
</template>
<script setup>
import AppActive from "@/ui/AppActive.vue";
import Button from "@/ui/Button.vue";
import { useRouter } from "vue-router";
import { useClss } from "@/use/useCl";
const props = defineProps({
  name: {
    type: String,
  },
  dt: {
    type: String,
  },
  txt: {
    type: String,
  },
  id: {
    type: String,
  },
  aciv: {
    type: String,
  },
});
const router = useRouter();
const goToInfo = (tid) => {
  router.push({ name: "task", params: { taskid: tid } });
};
const clss = (name) => {
  return useClss(name);
};
</script>
<style scoped>
.tack {
  display: grid;
  grid-template-areas:
    "one"
    "p"
    "btn";
  width: 900px;
  background-color: burlywood;
  margin: 1rem auto;
  border-radius: 8px;
  padding: 10px;
}
.one {
  display: grid;
  grid-template-areas: "h2 act";
  width: 97%;
  justify-content: space-between;
  align-items: center;
}
.h2 {
  grid-area: h2;
  font-weight: 400;
}

.btn {
  grid-area: btn;
  width: 250px;
  border: none;
  border-radius: 6px;
  background-color: chocolate;
  color: white;
  font-size: 16px;
}
.p {
  font-size: 12px;
  margin: 0;
  margin-bottom: 15px;
}
</style>
