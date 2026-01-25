<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    required: true,
    default: 'active',
  },
})

// создается для каждой кнопки ??
const variants = {
  primary: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 cursor-pointer',
  ghost: 'text-slate-500 hover:text-slate-300 bg-transparent cursor-pointer',
  active: 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 cursor-pointer',
  disabled: 'bg-slate-800 text-slate-600 cursor-not-allowed',
}

const basicStyles = computed(() => {
  return 'h-9.5 px-2 aspect-square rounded-md transition-all duration-200 flex items-center justify-center'
})

const dynamicStyles = computed(() => {
  return variants[props.variant] ?? variants.active
})
</script>

<template>
  <button :class="[basicStyles, dynamicStyles]">
    <slot></slot>
  </button>
</template>

<style scoped></style>
