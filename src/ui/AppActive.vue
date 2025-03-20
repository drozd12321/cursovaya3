<template>
  <div class="act" :class="cl">{{ getNameActive }}</div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  cl: {
    type: String,
  },
});
const classes = {
  primary: "Выполнено",
  danger: "Отмена",
  warning: "Выполняется",
  default: "Активная",
};
const getNameActive = computed(() => {
  return classes[props.cl];
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
  color: green;
  border: 2px solid green;
}
.act.danger {
  color: rgb(221, 4, 4);
  border: 2px solid rgb(221, 4, 4);
}
.act.warning {
  color: rgb(0, 132, 255);
  border: 3px solid rgb(0, 132, 255);
}
.act.default {
  color: green;
  border: 2px solid green;
}
</style>
