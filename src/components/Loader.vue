<template>
  <div class="cont">
    <div class="load f"></div>
    <div class="load s"></div>
    <div class="load t"></div>
  </div>
</template>
<script setup></script>
<style scoped>
.cont {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 100px;
  margin: 50% auto;
}
.load.f {
  animation-delay: 0.2s;
}
.load.s {
  animation-delay: 0.5s;
}
.load.t {
  animation-delay: 0.7s;
}
.load {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: loader 1.5s infinite;
  background-color: black;
}
@keyframes loader {
  from {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
