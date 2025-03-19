<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import AllTascks from "./components/AllTascks.vue";
import TheCreateTask from "./components/TheCreateTask.vue";
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <TheNavBar />
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
