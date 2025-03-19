<template>
  <header class="head">
    <h3 class="h3">Freelance</h3>
    <div class="div">
      <div class="all"><router-link to="/">Все задачи</router-link></div>
      <div class="create">
        <router-link to="/createtask">Создать</router-link>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style scoped>
a {
  text-decoration: none;
  color: black;
  padding: 7px;
}
.active {
  border-bottom: 3px solid chocolate;
}
.head {
  display: grid;
  grid-template-areas: "h3 div";
  justify-content: space-around;
  background-color: burlywood;
  color: rgb(9, 8, 8);
  align-items: center;
  font-size: 20px;
}
.h3 {
  grid-area: h3;
  font-size: 26px;
}
.div {
  grid-area: div;
  display: grid;
  grid-template-areas: "all create";
  gap: 24px;
}
.all {
  grid-area: all;
}
.create {
  grid-area: create;
}
</style>
