<template>
  <div class="tack">
    <div class="one">
      <h2 class="h2">Наименование задачи</h2>
      <AppActive class="primary" />
    </div>
    <p class="p">Дата</p>
    <div class="btn">
      <Button title="Посмотреть" @click="goToInfo" />
    </div>
  </div>
</template>
<script setup>
import AppActive from "@/ui/AppActive.vue";
import Button from "@/ui/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goToInfo = () => {
  router.push("/task");
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
  margin: 4rem auto;
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
  font-size: 20px;
  margin: 0;
  margin-bottom: 15px;
}
</style>
