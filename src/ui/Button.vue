<template>
  <button class="btn" :class="stil" @click="$emit('click')" type="submit">
    {{ title }}
  </button>
</template>
<script setup>
const props = defineProps({
  title: { type: String, required: true },
  stil: {
    type: String,
    default: "def",
  },
  type: {
    type: String,
    default: "submit",
  },
});
const emit = defineEmits(["click"]);
</script>
<style scoped>
.btn {
  grid-area: btn;
  width: auto;
  padding: 7px;
  border: none;
  border-radius: 6px;
  background-color: chocolate;
  color: white;
  font-size: 16px;
}
.prozr {
  background-color: transparent;
  border: 3px solid chocolate;
  color: rgb(255, 250, 250);
}
.red {
  background-color: coral;
}
</style>
