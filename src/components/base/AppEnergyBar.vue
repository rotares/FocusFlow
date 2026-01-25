<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
    default: 0,
  },
  gradient: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <div class="h-0.75 bg-slate-400/20">
    <div
      :style="{ width: `${props.percentage}%` }"
      :class="[props.gradient, 'bg-linear-to-r transition-all duration-700 h-full']"
    ></div>
  </div>
</template>

<style scoped></style>
