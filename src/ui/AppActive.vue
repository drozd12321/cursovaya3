<template>
  <div class="act" :class="class">Активен</div>
</template>
<script setup>
const props = defineProps({
  class: {
    type: String,
  },
});
</script>
<style scoped>
.act {
  grid-area: act;
  font-size: 15px;
  padding: 7px;
  border-radius: 8px;
}
.act.primary {
  border: 2px solid green;
}
.act.danger {
  border: 2px solid rgb(221, 4, 4);
}
</style>
