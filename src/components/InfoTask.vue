<template>
  <div class="task">
    <h2 class="h2">Название</h2>
    <div class="status">
      <span>Статус </span>
      <AppActive class="primary" />
    </div>
    <span class="data">Дедлайн</span>
    <span class="text">Описание</span>
    <div class="btn">
      <Button title="Взять в работу" stil="prozr"></Button>
      <Button title="Завершить работу" stil="def"></Button>
      <Button title="Отменить" stil="red"></Button>
    </div>
  </div>
</template>
<script setup>
import Button from "@/ui/Button.vue";
import AppActive from "../ui/AppActive.vue";
</script>
<style scoped>
.task {
  display: grid;
  grid-template-areas:
    "h2 h2 h2"
    "task . ."
    "status . ."
    "data . ."
    "text . ."
    "btn btn btn";
  background-color: burlywood;
  margin-top: 2rem;
  width: 900px;
  margin: 2rem auto;
  border-radius: 7px;
  padding: 10px;
  gap: 10px;
}
.h2 {
  grid-area: h2;
  border-bottom: 3px solid chocolate;
}
h2 {
  font-weight: 400;
}
.status {
  grid-area: status;
  display: flex;
  align-items: center;
  gap: 20px;
}
span {
  font-size: 20px;
}
.data {
  grid-area: data;
}
.text {
  grid-area: text;
}
.btn {
  grid-area: btn;
  display: flex;
  gap: 30px;
}
</style>
