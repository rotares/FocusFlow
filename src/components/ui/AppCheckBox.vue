<script setup>
import { Circle, CircleCheck } from 'lucide-vue-next'
const props = defineProps({
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },
})
const emits = defineEmits(['changeToggle'])
</script>

<template>
  <button
    class="rounded-full flex items-center justify-center h-13 aspect-square duration-700 transition-all"
    :class="props.isCompleted ? 'text-emerald-400' : 'text-cyan-400'"
    @click="emits('changeToggle')"
  >
    <CircleCheck size="27" v-if="props.isCompleted" />
    <Circle size="27" v-else />
  </button>
</template>

<style scoped></style>
