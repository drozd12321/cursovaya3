<template>
  <form class="grid" @submit.prevent="loadTask">
    <h2 class="h2">Созать новую задачу</h2>
    <div class="nm">
      <label for="name">Название</label>
      <input type="text" id="name" />
    </div>
    <div class="dt">
      <label for="dat">Дата дедлайна</label>
      <input type="date" />
    </div>
    <div class="txt">
      <label for="text">Описание</label>
      <textarea name="text" id="text"></textarea>
    </div>
    <button type="submit" class="btn">Создать</button>
  </form>
</template>
<script setup>
const loadTask = () => {};
</script>
<style scoped>
.grid {
  display: grid;
  background-color: burlywood;
  width: 80%;
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
