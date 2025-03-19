<template>
  <div class="tack">
    <div class="one">
      <h2 class="h2">Наименование задачи</h2>
      <div class="act danger">Активен</div>
    </div>
    <p class="p">Дата</p>
    <button class="btn">Посмотреть</button>
  </div>
</template>
<script setup></script>
<style scoped>
.tack {
  display: grid;
  grid-template-areas:
    "one"
    "p"
    "btn";
  width: 80%;
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
.act {
  grid-area: act;

  padding: 7px;
  border-radius: 8px;
}
.act.primary {
  border: 2px solid green;
}
.act.danger {
  border: 2px solid rgb(221, 4, 4);
}
.btn {
  grid-area: btn;
  width: 40%;
  padding: 7px;
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
